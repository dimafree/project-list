import React from 'react';

// assets
import styles from './Recent.module.scss';
import calendar from "../../assets/images/icons/calendar.svg";
import search from "../../assets/images/icons/search.svg";
import dots from "../../assets/images/icons/dots.svg";

const items = [
  {icon: '👾', title: 'Onboarding Wizzard', version: 'Version 3.7'},
  {icon: '⚾', title: 'Sale Properties', version: 'Version 4.1'},
  {icon: '🏓', title: 'Rental Properties', version: 'Version 2.1'},
  {icon: '👑', title: 'Onboarding Wizzard', version: 'Version 3.7'},
  {icon: '🏏', title: 'Sale Properties', version: 'Version 4.1'},
  {icon: '🚀', title: 'Map Filters', version: 'Version 2.5'},
  {icon: '🔫', title: 'Onboarding Wizzard', version: 'Version 3.7'},
  {icon: '💣', title: 'Rental Properties', version: 'Version 2.1'},
];

export const Recent = () => {
  return (
    <section className={styles.recent}>
      <div className='container'>
        <div className={styles.title}>
          <div className={styles.text}>
            <img className={styles.icon} src={calendar} alt='' />
            <h3>Recent Projects</h3>
          </div>
          <div className={styles.find}>
            <label>
              <input type='text' placeholder='Find project' />
              <img src={search} alt='' />
            </label>
          </div>
        </div>
        <div className={styles.items}>
          {items.map(item => (
            <div className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.version}</p>
              <div className={styles.setting}>
                <img src={dots} alt='' />
                <ul>
                  <li>Edit</li>
                  <li>Remove</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
