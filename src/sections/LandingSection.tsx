import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Animate from 'components/Motion/Animate';
import styles from "styles/LandingSection.module.scss"

const LandingSection = () => {
  const { scrollY } = useScroll() as any;
  const [northScrollY, setNorthScrollY] = useState(false);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY?.current < scrollY?.prev) {
        setNorthScrollY(true);
      } else if (scrollY?.current > scrollY?.prev) {
        setNorthScrollY(false);
      }
    })
  }, [scrollY])

  const textContainerVariants = {
    default: {
    },
    visible: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: northScrollY ? -1 : 1,
      },
    },
  };

  const fadeInVariants = {
    initial: {
      opacity: 0,
    },
    animate: (custom: number) => ({
      opacity: 1,
      transition: {
        opacity: {
          duration: 1.5, delay: custom * 1.5, ease: "easeInOut"
        }
      }
    })
  };

  return (
    <section className={styles.landing_section}>
      <motion.div
        className={styles.text_container}
        variants={textContainerVariants}
        initial="default"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div>
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          >
            <h1>
              Collaborate.
            </h1>
            <h1>
              Reward.
            </h1>
            <h1>
              Grow.
            </h1>

          </motion.div>
        </div>
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <h6>
            Alliance allows blockchains to trade yield with each other.
          </h6>
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <p>
            Alliance is an open-source Cosmos SDK module that leverages interchain staking to form economic alliances among blockchains. By allowing multiple tokens to be staked on a single chain, earning native staking rewards, Alliance opens up a range of use cases that strengthen decentralized economies, including attracting users, liquidity, and developers, deepening liquidity for essential token pairs, incentivizing native application development, and diversifying or augmenting staking yield.
          </p>
        </motion.div>
        <motion.div
          className={styles.button_container}
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <a
            className={styles.button}
            href="https://estimator.alliance.terra.money/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/Calc.svg" alt="Calculator" width={16} height={16} />
            Estimator
          </a>
          <a
            className={styles.button}
            href="https://docs.alliance.terra.money/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/Docs.svg" alt="Calculator" width={16} height={16} />
            Docs
          </a>
        </motion.div>
      </motion.div>

      <div className={styles.blob_1} />
      <div className={styles.blob_2} />
      <div className={styles.blob_3} />

      <div className={styles.ellipse_1} />
      <div className={styles.ellipse_2} />
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        custom={2}
        className={styles.ellipse_3}
      />
      <div className={styles.ellipse_4} />

      <motion.img
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        custom={0.5}
        src="/Images/AllianceLogoOutline.svg"
        alt="Alliance Logo"
        className={styles.alliance_outline}
        width={800}
      />
    </section>
  )
};

export default LandingSection;