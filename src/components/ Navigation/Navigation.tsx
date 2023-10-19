import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';
import styles from "styles/Navigation.module.scss";
import MobileNavigation from './MobileNavigation';

const Navigation = (
  { drawerOpen, onToggleDrawer }:
  { drawerOpen: boolean, onToggleDrawer: () => void }
) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <MobileNavigation
        drawerOpen={drawerOpen}
        onToggleDrawer={onToggleDrawer}
      />
    )
  }

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
            src="/Images/small_alliance.svg"
            className={styles.logo}
            alt="Logo"
          />
          <h3>Alliance</h3>
        </a>
      </div>
      <div className={styles.button_container}>
        <div className={styles.non_button_links}>
          <a
            href='https://alliance-dashboard.terra.money/'
            target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
          <a
            href='https://estimator.alliance.terra.money/'
            target="_blank"
            rel="noopener noreferrer"
          >
            Calculator
          </a>
          <a
            href='https://docs.alliance.terra.money/'
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            href='https://discord.com/invite/terra-money'
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon_only}
          >
            <img
              src="/Images/Discord.svg"
              alt="Discord Icon"
            />
          </a>
        </div>
        <a
          className={styles.terra_link}
          href='https://docs.alliance.terra.money/guides/get-started/'
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Integrate Alliance</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
