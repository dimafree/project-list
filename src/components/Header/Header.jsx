import React from 'react';

// assets
import styles from './Header.module.scss';
import logo from "../../assets/images/icons/logo.svg";
import helpInfo from "../../assets/images/icons/helpInfo.svg";
import status from "../../assets/images/icons/notification-status.svg";
import avatar from "../../assets/images/avatar.jpg";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.content}>
          <a className={styles.logo} href='#'>
            <img src={logo} alt='' />
          </a>
          <select name='' id=''>
            <option value=''>Company name 1</option>
            <option value=''>Company name 2</option>
            <option value=''>Company name 3</option>
          </select>
          <div className={styles.info}>
            <a className={styles.helpInfo} href='#'>
              <img src={helpInfo} alt='' />
            </a>
            <select name='' id=''>
              <option value=''>Help & Support</option>
              <option value=''>Help & Support 1</option>
              <option value=''>Help & Support 2</option>
            </select>
            <a className={styles.status} href='#'>
              <img src={status} alt='' />
            </a>
            <a className={styles.avatar} href='#'>
              <div className={styles.avatarImage}>
                <img src={avatar} alt='' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
