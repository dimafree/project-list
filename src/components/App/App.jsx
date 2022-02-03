import React from 'react';

// components
import { NewProject } from "../NewProject/NewProject";

// assets
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
        <NewProject />
    </div>
  );
}

export default App;
