import Filter from "./_components/Filter";
import FilterButtons from "./_components/FilterButtons";
import ImageDetails from "./_components/ImagesCard/ImageDetails";

import Searchbar from "./_components/searchbar/Searchbar";

import styles from "./homepage.module.css";
import { getPictures } from "./utils/actions";

export default async function Page({ searchParams: rawSearchParams }) {
  const searchParams = await rawSearchParams;
  const filter = searchParams?.category || "all"; // Default to "all" if no category

  const pictures = await getPictures();

  return (
    <div className="h-auto w-screen mb-[3rem]">
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/sea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
          <h1>
            The best free stock photos, royalty-free images shared by creators.
          </h1>
          {/* <Searchbar /> */}
        </div>
      </div>
      {/* <FilterButtons /> */}
      <Filter filter={filter} />

      <ImageDetails filter={filter} className="mb-9 " />
    </div>
  );
}
