import styles from "./searchbar.module.css";

function Searchbar() {
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

export default Searchbar;
