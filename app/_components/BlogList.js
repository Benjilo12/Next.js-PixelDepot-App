import Blogcard from "./blogcard";
import blogdata from "../data/blogdata";

function BlogList() {
  return (
    <div>
      {blogdata.length === 0 ? (
        <h1 className="text-center fs-4">No blog found!</h1>
      ) : (
        <div>
          {blogdata.map((item) => (
            <Blogcard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
