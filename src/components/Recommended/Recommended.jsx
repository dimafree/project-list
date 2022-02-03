import React from 'react';

// assets
import styles from './Recommended.module.scss';
import lightning from '../../assets/images/icons/lightning.svg';
import code from '../../assets/images/icons/code.svg';
import close from '../../assets/images/icons/close.svg';
import recommended1 from '../../assets/images/recommended-1.png';
import recommended2 from '../../assets/images/recommended-2.png';
import recommended3 from '../../assets/images/recommended-3.png';
import recommended4 from '../../assets/images/recommended-4.png';

const items = [
  {image: recommended1, user: code, title: 'FL0 Recipe', description: 'Next.js Realtime chat app'},
  {image: recommended2, user: code, title: 'FL0 Recipe', description: 'Next.js Realtime chat app'},
  {image: recommended3, user: code, title: 'FL0 Recipe', description: 'Next.js Subscription and Auth'},
  {image: recommended4, user: code, title: 'FL0 Recipe', description: 'Expo Starter tabs with Auth'},
];

export const Recommended = () => {
  return (
    <section className={styles.recommended}>
      <div className='container'>
        <div className={styles.title}>
          <div className={styles.text}>
            <img className={styles.icon} src={lightning} alt='' />
            <div className={styles.info}>
              <h3>Recommended Recipes</h3>
              <p>Browse through our recipes to learn about new use cases to implement in your app</p>
            </div>
          </div>
          <div className={styles.view}>
            <span className={styles.all}>
              View all
            </span>
            <span className={styles.close}>
              <img src={close} alt='' />
            </span>
          </div>
        </div>
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.image}>
                <div className={styles.cover}>
                  <a href={"#"} className='btn' type='button'>Use</a>
                  <a href={"#"} className='btn btn-second' type='button'>Preview</a>
                </div>
                <img src={item.image} alt='' />
              </div>
              <div className={styles.description}>
                <div className={styles.user}>
                  <img src={item.user} alt='' />
                  <h5>{item.title}</h5>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
