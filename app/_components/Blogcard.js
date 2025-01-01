import Link from "next/link";

function Blogcard({ item }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-8 md:p-16 space-y-6 md:space-y-0 mt-5 justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        {" "}
        {/* Adjust width on medium screens */}
        <img
          src={item.image} // Replace this with your image path
          alt="Concert"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/3 space-y-4 text-center md:text-left cursor-pointer">
        {" "}
        <Link href={`/blog/${item.id}`}>
          {/* Center text on small screens, left-align on medium */}
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center hover:text-blue-600">
            {item.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-[20px] text-center leading-[2.5rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Blogcard;
