import styles from "./benifits.module.css";

const cardDetails = [
  {
    id: 1,
    title: "Efficiency",
    desc: "Reduces diagnosis time and improves patient care",
    number: "01",
  },
  {
    id: 2,
    title: "Accuracy",
    desc: "Provides precise and reliable diagnostic results",
    number: "02",
  },
  {
    id: 3,
    title: "Accessibility",
    desc: "Ensures diagnosis in remote or rural areas",
    number: "03",
  },
  {
    id: 4,
    title: "Efficiency",
    desc: "Reduces diagnosis time and improves patient care",
    number: "04",
  },
];

const Benifits = () => {
  return (
    <div className={styles.befinitsWrapper}>
      <h2 className={`${styles.benifitTitle} titleTextWithGradient`}>
        Our Benifits
      </h2>
      <div className={styles.cards}>
        {cardDetails?.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={styles.cardIcon}>
                <img src="/upDownArrow.svg" alt="iconImage" />
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
            <div className={`${styles.cardNumber} titleTextWithGradient`}>
              {card.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
