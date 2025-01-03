import { getPictures } from "@/app/utils/actions";
import ImagesCard from "./ImagesCard";

export default async function ImageDetails({ filter }) {
  const pictures = (await getPictures()) || []; // Ensure it's always an array

  // Filter pictures based on the selected category
  let displayedPictures;

  if (filter === "all") displayedPictures = pictures;
  else {
    displayedPictures = pictures.filter(
      (picture) => picture.category === filter
    );
  }

  return (
    <div>
      {displayedPictures.length > 0 ? (
        <div>
          {displayedPictures.map((picture) => (
            <ImagesCard pictures={picture} key={picture.id} />
          ))}
        </div>
      ) : (
        <p className=" flex justify-center items-center text-2xl mt-3 mb-[20rem]">
          No pictures found for the selected category.
        </p>
      )}
    </div>
  );
}
