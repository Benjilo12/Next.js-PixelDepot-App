import Link from "next/link";
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <div>
      <nav>
        <ul className={styles.navitem}>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              Upload
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
