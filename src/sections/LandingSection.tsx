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
  const videoCutOff = useMediaQuery('(max-width: 1100px)');

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
      <div className={styles.container}>
        <div className={styles.text__section}>
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
            {videoCutOff && (
              <motion.div
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
              >
                <div className={styles.video__responsive}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Xoe9hTzKyeo?si=gU3eAbGoL9_cWqXb"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}
            <motion.div
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
            >
              <p>
                Alliance is an open-source Cosmos SDK module that enables blockchains to form mutually beneficial relationships, similar to trade agreements between countries. Using Alliance, a chain can allow almost any token—including liquid staking tokens, stablecoins, liquidity provider tokens, and other Cosmos assets—to be staked on their chain to earn staking rewards. In turn for providing a portion of the chain’s staking rewards to stakers of these tokens, the chain can redistribute a percentage of these staked Alliance assets to native token stakers.
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
                href="https://medium.com/terra-money/how-to-stake-alliance-assets-a-step-by-step-guide-8e1b263830c2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stake Alliance Assets
              </a>
              <a
                className={styles.button}
                href='https://docs.alliance.terra.money/guides/get-started/'
                target="_blank"
                rel="noopener noreferrer"
              >
                Integrate Alliance
              </a>
            </motion.div>
          </motion.div>

          <div className={cx(styles.integrations, { isMobile })}>
            <h3>
              Integrations & Partners
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
                    className={cx({ [styles.size__override]: chain.sizeOverride })}
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
        </div>

        {!videoCutOff && (
          <div className={styles.video__responsive}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Xoe9hTzKyeo?si=gU3eAbGoL9_cWqXb"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
      </div>

      <div className={styles.blob_1} />
      {/* <div className={styles.blob_2} /> */}
      <div className={styles.blob_3} />

      <div className={styles.ellipse_1} />
      <div className={styles.ellipse_2} />
      {/* <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        custom={2}
        className={styles.ellipse_3}
      /> */}
      <div className={styles.ellipse_4} />

      {/* <motion.img
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        custom={0.5}
        src="/Images/AllianceLogoOutline.svg"
        alt="Alliance Logo"
        className={styles.alliance_outline}
        width={800}
      /> */}
    </section>
  )
};

export default LandingSection;
