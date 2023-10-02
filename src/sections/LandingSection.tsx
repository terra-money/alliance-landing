import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { chains } from './integrationsData';
import styles from "styles/LandingSection.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LandingSection = () => {
  const { scrollY } = useScroll() as any;
  const [northScrollY, setNorthScrollY] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

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
            Alliance is an open-source Cosmos SDK module that leverages interchain staking to form economic alliances among blockchains. Liquid Staking Tokens (LSTs) are moved from a larger, more liquid chain to a newer chain, and the cash flows from the LSTs cycle domestically, along with new users and assets coming with it. Uncorrelated, higher liquidity, lower volatility cash flows from other ecosystems can be used to augment and diversify the staking yield for the native coin – making it a more interesting coin to hold and stake. Simultaneously, holders of allied coins have more avenues to boost their yield – providing utility to the allied coins.
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
            href="https://twitter.com/terra_money/status/1695426843787305313"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stake Alliance assets
          </a>
          <a
            className={styles.button}
            href="https://docs.alliance.terra.money/overview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
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

      <div className={cx(styles.integrations, { isMobile })}>
        <h3>
          Integrations & Staking Partners
        </h3>
        <div className={styles.icons}>
          {chains.map((chain, index) => (
            <a
              key={index}
              href={chain.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_only}
            >
              <img
                src={chain.logo}
                alt={chain.name}
                style={{
                  width: chain.sizeOverride || '28px',
                  height: chain.sizeOverride || '28px',
                  margin: chain.sizeOverride ? '0 -6px' : '0px',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
};

export default LandingSection;