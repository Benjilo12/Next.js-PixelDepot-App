"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { supabase } from "../utils/supabase";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

const Page = () => {
  const [formData, setFormData] = useState({ category: "", file: null });

  const categories = [
    "nature",
    "animals",
    "background",
    "people",
    "technology",
  ];

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPicture = async (e) => {
    e.preventDefault();

    if (formData.file && formData.category) {
      // Upload the file to Supabase storage
      const { data, error } = await supabase.storage
        .from("images") // Supabase storage bucket name
        .upload(`${uuidv4()}_${formData.file.name}`, formData.file);

      if (error) {
        toast.error("Error uploading image!");
        console.error("Upload error:", error);
        return;
      }

      if (!data || !data.path) {
        toast.error("File upload succeeded but no path returned!");
        console.error("Upload data:", data);
        return;
      }

      // Retrieve public URL
      const { data: publicUrlData, error: urlError } = supabase.storage
        .from("images")
        .getPublicUrl(data.path);

      if (urlError || !publicUrlData.publicUrl) {
        toast.error("Error retrieving image URL!");
        console.error("URL error:", urlError);
        return;
      }

      const newImage = {
        id: uuidv4(),
        imgUrl: publicUrlData.publicUrl, // Correctly set the image URL
        category: formData.category,
      };
      console.log("Image URL:", publicUrlData.publicUrl);

      // Insert image data into Supabase database
      const { error: insertError } = await supabase
        .from("pictures")
        .insert([newImage]);

      if (insertError) {
        toast.error("Error saving image data!");
        console.error("Insert error:", insertError);
      } else {
        toast.success("Image added successfully!");
        setFormData({ category: "", file: null }); // Reset form
      }
    } else {
      toast.error("Please provide all required fields!");
    }

    redirect("./");
  };

  return (
    <div className="h-screen">
      {/* Header and instructions */}
      <div className="flex items-start justify-center px-4 mt-20 overflow-x-hidden">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-8 md:leading-10 tracking-tight md:tracking-wide">
            Share your photos and videos, and let the world love them.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-4">
            Share your first 50 photos or videos to introduce yourself to
            millions of Pexels users.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-20 text-3xl md:text-4xl text-gray-600 font-extrabold ml-5">
          Upload Image
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleAddPicture}
          className="flex items-center justify-center ml-[140px]"
        >
          <div className="flex flex-col mt-4">
            <input
              className="w-[100px] mb-7 border-gray-300 md:ml-[3.5rem] mr-20 ml-6 md:mr-0"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <label
              className="mb-[40px] text-3xl font-bold mr-20 md:mr-0 ml-5 md:ml-[3rem]"
              htmlFor="input-id"
            >
              Category
            </label>
            <select
              className="bg-transparent rounded border border-gray-300 text-gray-800 p-2 md:p-3 w-[220px] md:w-[300px] mr-[50px] mb-[3rem]"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white font-bold py-2 px-3 rounded"
            >
              upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
