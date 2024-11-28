import Searchbar from "./_components/searchbar/Searchbar";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1>
          The best free stock photos, royalty-free images shared by creators.
        </h1>
        <Searchbar />
      </div>
    </div>
  );
}
