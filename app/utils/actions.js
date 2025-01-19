"use server";

import { revalidatePath } from "next/cache";

import { supabase } from "./supabase";
import { toast } from "react-toastify";
import { auth, signIn, signOut } from "./auth";

export async function getPictures() {
  const { data, error } = await supabase.from("pictures").select("*");

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Pictures could not be loaded");
  }

  return data;
}

// export async function filterImages(category) {
//   const images = await getPictures();
//   return images.filter(
//     (image) => image.category.toLowerCase() === category.toLowerCase()
//   );
// }

// export async function SignInAction() {
//   await signIn("google", { redirectTo: "/upload" });
// }

export async function SignInAction() {
  await signIn("google", { redirectTo: "/upload" });
}

export async function SignOutAction() {
  await signOut("google", { redirectTo: "/" });
}

export async function handleDelete(event, { picturesId, imgUrl }) {
  try {
    const session = await auth();
    console.log(session);

    if (!session) {
      throw new Error("Unauthorized access: No session found.");
    }

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
  revalidatePath("./pictures");
}

export async function downloadImage(imgUrl) {
  if (!imgUrl) {
    console.error("No image URL provided.");
    return;
  }

  try {
    console.log("Fetching image from:", imgUrl);
    const response = await fetch(imgUrl); // Directly fetch the image URL

    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    // Check the content type of the response
    const contentType = response.headers.get("Content-Type");
    console.log("Content-Type:", contentType);

    // Ensure the response is of type image
    if (!contentType || !contentType.startsWith("image/")) {
      throw new Error("Response is not an image.");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = imgUrl.split("/").pop() || "downloaded-image";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
}
