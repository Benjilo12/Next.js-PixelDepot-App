export default function ImagesCard({ pictures }) {
  // Assume fetchPictures returns a single object, not an array
  console.log(pictures);
  const { id, imgUrl, category } = pictures;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 mx-4 sm:mx-20 mt-8">
      <div
        key={id}
        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105"
      >
        <img
          src={imgUrl}
          alt={`Picture ${category}`}
          width={350}
          height={350}
          style={{ objectFit: "cover" }}
          className="rounded-xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
        <a
          href={imgUrl}
          className="absolute bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-xs md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
          {category}
        </div>
      </div>
    </div>
  );
}
