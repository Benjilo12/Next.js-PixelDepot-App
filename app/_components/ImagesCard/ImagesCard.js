import DeleteButton from "../DeleteButton";
import DownloadButton from "../DownloadButton";

export default function ImagesCard({ pictures }) {
  const { id, imgUrl, category } = pictures;

  return (
    <div className="inline-block flex-wrap px-3 lg:ml-[1.3rem] ml-[3.4rem]   mt-[1rem] ">
      <div
        key={id}
        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 w-[330px] h-[335px] flex-row"
      >
        <img
          src={imgUrl}
          alt={`Picture ${category}`}
          width={350}
          height={300}
          style={{ objectFit: "cover" }}
          className="rounded-xl w-full h-full flex-row"
        />

        <div className="absolute bottom-4 right-4 p-2  bg-green-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-xs md:text-base">
          <DownloadButton imgUrl={imgUrl} />
          <DeleteButton picturesId={id} imgUrl={imgUrl} />
        </div>
        <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
          {category}
        </div>
      </div>
    </div>
  );
}
