import React from 'react';

// assets
import styles from './NewProject.module.scss';
import icon from '../../assets/images/new.svg';

const items = [
  {image: icon, title: 'New Project', description: 'Create your own new project'},
];

export const NewProject = () => {
  return (
    <section className={styles.new}>
      <div className='container'>
        <div className={styles.content}>
          {items.map(item => (
            <div className={styles.item}>
              <img src={item.image} alt='' />
              <div className={styles.info}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
