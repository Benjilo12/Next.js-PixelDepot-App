"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

function Navigation() {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        <ul className={styles.navitem}>
          <li>
            <Link
              href="/about"
              className={`${styles.link} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/upload"
              className={`${styles.link} ${
                pathname === "/upload" ? styles.active : ""
              }`}
            >
              Upload
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${styles.link} ${
                pathname === "/blog" ? styles.active : ""
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
