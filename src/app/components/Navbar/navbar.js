"use client"
import { useState } from "react"
import styles from "./navbar.module.css"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => setMenuActive(!menuActive)
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            axamin.ai
        </div>
        <ul className={menuActive ? `${styles.links} ${styles.active}`: styles.links}>
            <li className={styles.link}><a href="#">Solutions</a></li>
            <li className={styles.link}><a href="#">Chatbox</a></li>
            <li className={styles.link}><a href="#">About us</a></li>
            <li className={styles.link}><a href="#">Contact us</a></li>
            <button className={`${styles.btn} ${styles.demoBtn} buttonWithGradient`}>Demo Request</button>
        </ul>
        <div className={styles.buttons}>
            <button className={`${styles.btn} buttonWithGradientBorder`}>Sign In</button>
            <button className={`${styles.btn} ${styles.demoBtn} buttonWithGradient`}>Demo Request</button>
        </div>
        <div className={menuActive ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu } onClick={toggleMenu}>
          {
            menuActive ? 
            (
              <img src="/crossIcon.png" alt="icon" />
            )
            : (
              <img src="/menuIcon.png" alt="icon" />
            )
          }
          {/* \\\ */}
        </div>
    </nav>
  )
}

export default Navbar