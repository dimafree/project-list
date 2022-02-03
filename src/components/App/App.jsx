import React from 'react';

// components
import { Header } from "../Header/Header";
import { NewProject } from "../NewProject/NewProject";
import { Recommended } from "../Recommended/Recommended";
import { Recent } from "../Recent/Recent";

// assets
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <main>
        <NewProject />
        <Recommended />
        <Recent />
      </main>
    </div>
  );
}

export default App;
