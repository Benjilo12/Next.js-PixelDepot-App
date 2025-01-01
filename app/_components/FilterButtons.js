"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getPictures } from "../utils/actions";
import ImagesCard from "./ImagesCard/ImagesCard";

export default function FilterButtons() {
  const [pictures, setPictures] = useState([]);
  const [filteredPictures, setFilteredPictures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchParams = useSearchParams();

  // Fetch pictures directly in the component body
  useEffect(() => {
    const fetchPictures = async () => {
      const fetchedPictures = await getPictures();
      setPictures(fetchedPictures);
    };

    fetchPictures();
  }, []);

  // Update filtered pictures when pictures or selected category changes
  useEffect(() => {
    const category = searchParams.get("category") || "";
    setSelectedCategory(category);

    const filtered =
      category === ""
        ? pictures
        : pictures.filter((picture) => picture.category === category);

    setFilteredPictures(filtered);
  }, [pictures, searchParams]);

  const categories = [
    "nature",
    "animals",
    "background",
    "people",
    "technology",
  ];

  const handleFilter = (category) => {
    const params = new URLSearchParams(window.location.search);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-10 mb-10 cursor-pointer">
        {categories.map((category) => (
          <div key={category} onClick={() => handleFilter(category)}>
            <h2
              className={`p-2 ${
                selectedCategory === category ? "bg-blue-800" : "bg-blue-600"
              } rounded px-4 text-white`}
            >
              {category}
            </h2>
          </div>
        ))}
        <div onClick={() => handleFilter("")}>
          <h2
            className={`p-2 ${
              selectedCategory === "" ? "bg-gray-800" : "bg-gray-600"
            } rounded px-4 text-white`}
          >
            All
          </h2>
        </div>
      </div>

      <div className="inline-block flex-wrap px-3 md:ml-[1.3rem] ml-[3.4rem] mt-[1rem]">
        {filteredPictures.map((picture) => (
          <div
            key={picture.id}
            className="inline-block flex-wrap px-3 md:ml-[1.3rem] ml-[3.4rem] mt-[1rem]"
          >
            <ImagesCard pictures={picture} />
          </div>
        ))}
      </div>
    </div>
  );
}
