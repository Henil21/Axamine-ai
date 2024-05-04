"use client"
import { useEffect, useState } from "react"
import styles from "./navbar.module.css"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [activeNav, setActiveNav] = useState("#home");
  const toggleMenu = () => setMenuActive(!menuActive)

  useEffect(() => {
    setMenuActive(false)
  }, [activeNav])
  
  
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#home" onClick={() => setActiveNav("#home")}>
            axamin.ai
          </a>
        </div>
        <ul className={menuActive ? `${styles.links} ${styles.active}`: styles.links}>
            <li className={styles.link}><a href="#benifits" onClick={() => setActiveNav("#home")}>Yash</a></li>
            <li className={styles.link}><a href="#team" onClick={() => setActiveNav("#team")}>Chatbox</a></li>
            <li className={styles.link}><a href="#about" onClick={() => setActiveNav("#about")}>About us</a></li>
            <li className={styles.link}><a href="#contact" onClick={() => setActiveNav("#contact")}>Contact us</a></li>
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