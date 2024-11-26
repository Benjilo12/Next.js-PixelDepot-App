import Link from "next/link";
import styles from "./navbar.module.css";

import Image from "next/image";
import Navigation from "../navigation/navigation";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className="navbar-logo flex items-center gap-2 z-10">
        <Image src="/logo.png" height="50" width="50" alt=" PixelDepot" />
        <span>PixelDepot</span>
      </Link>
      <Navigation />
    </div>
  );
}

export default Navbar;
