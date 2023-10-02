import { forwardRef } from 'react';
import classNames from 'classnames';
import { Drawer } from '@mui/material';
import styles from './MobileNavigation.module.scss';

interface MobileNavigationProps {
  drawerOpen: boolean;
  onToggleDrawer: () => void;
}

const MobileNavigation = forwardRef<
  HTMLDivElement | null,
  MobileNavigationProps
>((props, ref) => {
  const { drawerOpen, onToggleDrawer } = props;

  return (
    <div className={styles.mobile_navigation}>
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
      <button
        className={styles.menu_btn}
        onClick={onToggleDrawer}
      >
        <img
          src="/Images/Menu.svg"
          alt='menu' />
      </button>
      <Drawer
        anchor="right"
        open={drawerOpen}
        classes={{
          paper: styles.drawer,
        }}
        onClose={onToggleDrawer}
      >
        <div className={styles.top}>
          <button
            className={classNames(styles.menu_btn, styles.menu_btn_inner)}
            onClick={onToggleDrawer}
          >
            <img
              src="/Images/Menu.svg"
              alt='menu' />
          </button>
        </div>
        <div className={styles.middle}>
          <h3
            className={classNames(styles.label, styles.menu_label)}
          >
            Menu
          </h3>
          <h2 className={styles.menu_heading}>
            <a
              href='https://estimator.alliance.terra.money/'
              target="_blank"
              rel="noopener noreferrer"
            >
              Calculator
            </a>
          </h2>
          <h2 className={styles.menu_heading}>
            <a
              href='https://docs.alliance.terra.money/'
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </h2>
          <h2 className={styles.menu_heading}>
            <a
              className={styles.terra_link}
              href='https://docs.alliance.terra.money/guides/get-started/'
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Integrate Alliance</span>
            </a>
          </h2>
        </div>
        <div className={styles.bottom}>
          <h4
            className={classNames(styles.label, styles.social_media_label)}
          >
            Social media
          </h4>
          <div className={styles.social_media_items}>
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
        </div>
      </Drawer>
    </div>
  );
});

export default MobileNavigation;
