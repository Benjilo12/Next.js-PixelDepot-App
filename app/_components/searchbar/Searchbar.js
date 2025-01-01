import { getPictures } from "@/app/utils/actions";
import styles from "./searchbar.module.css";

export default async function Searchbar() {
  const pictures = getPictures();
  console.log(pictures);
  return (
    <div>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="Search for free photos"
          className={styles.input}
        />
        <button className={styles.button}>🔍</button>
      </div>
    </div>
  );
}
