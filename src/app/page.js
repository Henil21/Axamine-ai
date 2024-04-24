import Navbar from "./components/Navbar/navbar"
import Home from "./components/Home/home"
import styles from "./page.module.css"

const App = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Home />
    </main>
  )
}

export default App