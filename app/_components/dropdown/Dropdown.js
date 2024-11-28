"use client";

import Link from "next/link";
import styles from "./dropdown.module.css";

function Dropdown() {
  return (
    <div className={styles.submenu}>
      <Link
        href="/login"
        className={styles.link}
        onClick={() => setdropdown(false)}
      >
        Login
      </Link>
    </div>
  );
}

export default Dropdown;
