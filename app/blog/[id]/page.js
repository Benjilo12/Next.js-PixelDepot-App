import blogdata from "@/app/data/blogdata";

function Page({ params }) {
  const { id } = params;
  console.log(params);

  // Find the specific blog by ID
  const blog = blogdata.find((blog) => blog.id === parseInt(id));
  console.log(blog);

  if (!blog) {
    return (
      <div className="h-auto flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  const { title, image, details } = blog;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="  bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[70%] h-[35rem] object-cover mx-auto"
        />
        <div className="p-6">
          <h1 className="text-3xl mt-10 font-bold mb-4 text-center">{title}</h1>
          <p className="text-gray-700 mx-auto leading-8 mb-16 w-[70%] text-lg">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
