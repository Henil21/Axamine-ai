"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const toggleMenu = () => setMenuActive(!menuActive);

  //for active links
  const pathname = usePathname();

  console.log(pathname);

  const menuClickFunction = (link) => {
    link && setActiveNav(link);
    setMenuActive(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={() => setActiveNav("/")}>
          <img src="/axamine_logo.png" alt="logo" />
        </Link>
      </div>
      <ul
        className={
          menuActive ? `${styles.links} ${styles.active}` : styles.links
        }
      >
        <li className={`${styles.link} `}>
          <Link href="/#benifits" onClick={() => menuClickFunction("#benifits")}>
            Benifits
          </Link>
        </li>
        <li
          className={`${styles.link} ${
            activeNav === "/chatbox" ? styles.active : ""
          }`}
        >
          <Link href="/chatbox" onClick={() => menuClickFunction("/chatbox")}>
            Chatbox
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/#about" onClick={() => menuClickFunction("#about")}>
            About us
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/#contact" onClick={() => menuClickFunction("#contact")}>
            Contact us
          </Link>
        </li>
        <Link href={"/report"} onClick={() => menuClickFunction("/report")}>
          <button
            className={`${styles.btn} ${styles.demoBtn} buttonWithGradient`}
          >
            Demo Request
          </button>
        </Link>
      </ul>
      <div className={styles.buttons}>
        <button className={`${styles.btn} buttonWithGradientBorder`}>
          Sign In
        </button>
        <Link href={"/report"} onClick={() => menuClickFunction("/report")}>
          <button
            className={`${styles.btn} ${styles.demoBtn} buttonWithGradient`}
          >
            Demo Request
          </button>
        </Link>
      </div>
      <div
        className={
          menuActive
            ? `${styles.mobileMenu} ${styles.active}`
            : styles.mobileMenu
        }
        onClick={toggleMenu}
      >
        {menuActive ? (
          <img src="/crossIcon.png" alt="icon" />
        ) : (
          <img src="/menuIcon.png" alt="icon" />
        )}
        {/* \\\ */}
      </div>
    </nav>
  );
};

export default Navbar;
