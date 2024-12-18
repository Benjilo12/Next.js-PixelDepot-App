"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Page = () => {
  const [pictures, setPictures] = useState();
  const [formData, setFormData] = useState({ category: "", file: null });

  const categories = [
    "nature",
    "animals",
    "background",
    "people",
    "technology",
  ];

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
        <form className="flex items-center justify-center ml-[140px]">
          <div className="flex flex-col mt-4">
            <input
              className="w-[100px] mb-7 border-gray-300 md:ml-[3.5rem] mr-20 ml-6 md:mr-0"
              type="file"
              accept="image/*"
              required
            />
            <label
              className="mb-[17px] text-3xl font-bold mr-20 md:mr-0 ml-5 md:ml-[3rem]"
              htmlFor="input-id"
            >
              Category
            </label>
            <select
              className="bg-transparent rounded border border-gray-300 text-gray-800 p-2 md:p-3 w-[220px] md:w-[300px] mr-[50px] md:mr-7 mb-10"
              name="category"
              value={formData.category}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>{" "}
            {/* Closing tag for select */}
            <button
              type="submit"
              className="bg-lime-900 text-center md:p-4 rounded-2xl text-slate-100 md:text-2xl text-[1rem] p-3 transition ease-out duration-300 hover:bg-lime-700 mr-8 md:mr-0 mt-10"
            >
              Add Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
