"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { toast } from "react-toastify";

export async function getPictures() {
  const { data, error } = await supabase.from("pictures").select("*");
  if (error) {
    console.error("Error fetching pictures:", error);
    throw new Error("Pictures could not be loaded");
  }
  return data;
}
export async function handleDelete(event, { picturesId, imgUrl }) {
  try {
    // Extract the file name from the URL
    const fileName = imgUrl.split("/").pop();

    // Delete from Supabase storage
    const { error: storageError } = await supabase.storage
      .from("images")
      .remove([fileName]);

    if (storageError) {
      toast.error("Error deleting image from storage!");
      console.error("Storage delete error:", storageError);
      return;
    }

    // Delete from Supabase database
    const { error: dbError } = await supabase
      .from("pictures")
      .delete()
      .eq("id", picturesId);

    if (dbError) {
      toast.error("Error deleting image from database!");
      console.error("Database delete error:", dbError);
    } else {
      toast.success("Image deleted successfully!");
    }
  } catch (error) {
    console.error("Error deleting picture:", error);
  }
  revalidatePath("./");
}

export async function downloadImage(imgUrl) {
  try {
    const link = document.createElement("a");
    link.href = imgUrl;

    // Ensure the filename is valid
    const filename = imgUrl.split("/").pop() || "downloaded_image";
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading the image:", error);
  }
}
