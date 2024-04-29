import Image from "next/image";
import styles from "./team.module.css";
import profile1 from "@/../../public/profile1.png";

const teamMembers = [
  {
    id: 1,
    name: 'Jessica Jones',
    tag: 'founder'
  },
  {
    id: 2,
    name: 'Jessica Jones',
    tag: 'founder'
  },
  {
    id: 3,
    name: 'Jessica Jones',
    tag: 'founder'
  },
  {
    id: 4,
    name: 'Jessica Jones',
    tag: 'founder'
  },
  {
    id: 5,
    name: 'Jessica Jones',
    tag: 'founder'
  },
]

const Team = () => {
  console.log();
  return (
    <div className={styles.teamWrapper}>
      <h2 className={`${styles.teamTitle} titleTextWithGradient`}>Our Team</h2>
      <p className={`${styles.teamText} subTitleText`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ullam
        inventore totam nam nulla possimus. In ut at facere tempora.{" "}
      </p>
      <div className={styles.profileCards}>
        {
          teamMembers?.map((card, index) => (
            <div className={`${styles.profileCard} ${styles.card1} ${Math.round(teamMembers.length / 2 - 1) === index ? styles.active : ""}`} key={index}>
                <div className={styles.backgroundImage}>
                    <Image src={profile1} fill sizes="20%" alt="profile" placeholder="blur"/>
                </div>
                <div className={styles.content}>
                    <p className={styles.tag}>{card.tag}</p>    
                    <p className={styles.name}>{card.name}</p>   
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Team;
