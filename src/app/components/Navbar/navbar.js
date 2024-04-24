import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            axamin.ai
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><a href="#">Solutions</a></li>
            <li className={styles.link}><a href="#">Chatbox</a></li>
            <li className={styles.link}><a href="#">About us</a></li>
            <li className={styles.link}><a href="#">Contact us</a></li>
        </ul>
        <div className={styles.buttons}>
            <button className="buttonWithGradientBorder">Sign In</button>
            <button className="buttonWithGradient">Demo Request</button>
        </div>
    </nav>
  )
}

export default Navbar