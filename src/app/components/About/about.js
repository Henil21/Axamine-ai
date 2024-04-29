import styles from "./about.module.css";
import image1 from "@/../../public/2.png";
import image2 from "@/../../public/1.png";
import image3 from "@/../../public/3.png";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
        <div className={`${styles.image1} ${styles.image}`}>
          <Image
            src={image1}
            sizes="250px"
            fill
            alt="image"
            placeholder="blur"
          />
        </div>
        <div className={`${styles.image2} ${styles.image}`}>
          <Image
            src={image2}
            fill
            sizes="250px"
            alt="image"
            placeholder="blur"
          />
        </div>
        <div className={`${styles.image3} ${styles.image}`}>
          <Image
            src={image3}
            fill
            sizes="250px"
            alt="image"
            placeholder="blur"
          />
        </div>
        <div className={`${styles.image4} ${styles.image}`}>
          <Image
            src={image1}
            fill
            sizes="250px"
            alt="image"
            placeholder="blur"
          />
        </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={`${styles.aboutTitle} titleTextWithGradient`}>
        About us
        </h2>
        <p className={`${styles.heroText} subTitleText`}>
        Axamine stands out for its ability to integrate seamlessly into existing healthcare workflows, providing real-time diagnostic support to healthcare professionals without disrupting their routines.
        </p>
        <button className={`${styles.btn} buttonWithGradient`}>Learn More 
          <img src="/arrow.svg" alt="arrowImage" />
        </button>
      </div>
    </div>
  );
};

export default About;
