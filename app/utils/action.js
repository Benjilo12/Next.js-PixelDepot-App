import { supabase } from "./supabase";

export async function getPictures() {
  const { data, error } = await supabase.from("pictures").select("*");
  if (error) {
    console.error("Error fetching pictures:", error);
    throw new Error("Pictures could not be loaded");
  }
  return data;
}
