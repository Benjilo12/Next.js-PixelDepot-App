"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import Navigation from "../navigation/navigation";
import Dropdown from "../dropdown/dropdown";
import dynamic from "next/dynamic";

import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // State for mobile menu

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" className={styles["navbar-logo"]}>
          <Image src="/logo.png" height="50" width="50" alt="PixelDepot" />
          <span className="ml-2">PixelDepot</span>
        </Link>

        <div
          className={`${styles["nav-links"]} ${mobileMenu ? styles.show : ""}`}
        >
          <Navigation />
        </div>

        <div className={styles["hamburger-menu"]} onClick={toggleMobileMenu}>
          {!mobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        <div ref={dropdownRef} className={styles.avatar}>
          <div className="flex cursor-pointer" onClick={toggleDropdown}>
            <img src="/logo.png" alt="avatar" className="h-10 rounded-full" />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {dropdown && <Dropdown />}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
