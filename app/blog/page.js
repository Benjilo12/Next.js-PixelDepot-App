export const metadata = {
  title: "Blog",
};

import BlogList from "../_components/BlogList";
import styles from "./blog.module.css";

function page() {
  return (
    <div className=" h-auto">
      <div className={styles.container}>
        <div className="flex flex-col text-white text-center ">
          <h1 className="text-4xl mb-4 md:text-9xl">Blog</h1>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-center text-4xl">Popular Blog Stories</h1>
      </div>
      <div>
        <BlogList />
      </div>
    </div>
  );
}

export default page;
