import { motion } from "framer-motion";
import styles from "styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <motion.nav
      className={styles.navigation}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.25,
      }}
    >
      <div className={styles.left_container}>
        <a
          className={styles.logo_container}
          href="/"
        >
          <img
            src="/Images/AllianceLogo.svg"
            className={styles.logo}
            alt="Logo"
            width={40}
            height={40}
          />
          <h3>Alliance</h3>
        </a>
      </div>
      <div className={styles.button_container}>
        <a
          className={styles.terra_link}
          href='https://www.terra.money/'
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Images/TerraLogo.svg"
            alt="Terra"
            width={16}
            height={16}
          />
          <span>terra.money</span>
          <img
            src="/Images/Arrow.svg"
            alt="Arrow"
            width={14}
            height={14}
            className={styles.arrow}
          />
        </a>
        <a
          className={styles.terra_link}
          href='https://docs.alliance.terra.money/'
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Images/Docs.svg"
            alt="Documentation Icon"
          />
          <span>Docs</span>
          <img
            src="/Images/Arrow.svg"
            alt="Arrow"
            width={14}
            height={14}
            className={styles.arrow}
          />
        </a>
      </div>
    </motion.nav>
  )
}

export default Navigation;
