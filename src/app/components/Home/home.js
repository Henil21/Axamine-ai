import Image from "next/image"
import styles from "./home.module.css"
import image1 from "@/../../public/2.png"
import image2 from "@/../../public/1.png"

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.left}>
        <h1 className={styles.heroTitle}>
        AI-integrated Diagnostic
        </h1>
        <p className={`${styles.heroText} subTitleText`}>
        Axamine is an innovative AI-powered diagnostic system designed to empower healthcare professionals in making more precise and accurate diagnoses while saving valuable time. Accessible and reliable, Axamine streamlines the diagnostic process, enhancing patient care and outcomes.
        </p>
        <button className={`${styles.btn} buttonWithGradient`}>Demo Request 
          <img src="/arrow.svg" alt="arrowImage" />
        </button>
      </div>
      <div className={styles.right}>
      <div className={styles.rightWrapper}>
        <div className={`${styles.image1} ${styles.image}`}>
          <Image src={image1} sizes="250px" fill alt="image" placeholder="blur"/>
        </div>
        <div className={`${styles.image2} ${styles.image}`}>
          <Image src={image2} fill sizes="250px" alt="image" placeholder="blur"/>
        </div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.card1}`}>
            <span></span>
            Healthcare Professionals
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <span></span>
            Accurate Diagnoses
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <span></span>
            Optimize Treatment Plans
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home