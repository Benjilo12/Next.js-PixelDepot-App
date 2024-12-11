"use client";

import { useState } from "react";
import { v4 } from "uuid";

const metadata = {
  title: "Upload",
};

function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  return (
    <div className=" h-screen">
      <div className=" flex items-start justify-center px-4 mt-20 overflow-x-hidden">
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
        <h1 className="text-center mt-20 text-3xl  md:text-4xl text-gray-600 font-extrabold ml-5">
          Upload Image
        </h1>
      </div>
      <div className="flex justify-center mt-1 text-4xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 md:size-40 ml-10 md:ml-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      <div>
        <form className="flex items-center justify-center ml-[140px]">
          <div className="flex flex-col mt-4">
            <input
              className="w-[100px] mb-7 border-gray-300 md:ml-[3.5rem] mr-20 ml-6 md:mr-0"
              type="file"
              required
            />
            <label
              className="mb-[17px] text-3xl font-bold mr-20 md:mr-0 ml-5 md:ml-[3rem]"
              htmlFor="input-id"
            >
              Category
            </label>
            <input
              className="bg-transparent rounded border border-gray-300 text-gray-800 p-2 md:p-3 w-[220px] md:w-[300px] mr-[10px]md:mr-7 mb-10"
              type="text"
              placeholder="Enter category"
              required
            />
            <label className="text-center mr-[4rem] text-3xl font-bold ml-8 md:ml-0 mb-4  border-[#FFCDA3]">
              {" "}
              Description
            </label>
            <textarea
              className="h-[10rem] md:w-[20rem] p-2 mb-20  border-[#FFCDA3]"
              placeholder="Description"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
