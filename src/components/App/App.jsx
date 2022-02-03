import React from 'react';

// components
import { NewProject } from "../NewProject/NewProject";
import { Recommended } from "../Recommended/Recommended";

// assets
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <NewProject />
      <Recommended />
    </div>
  );
}

export default App;
