import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import styles from './MainContent.module.css'
import MyRecords from './MyRecords';
import Profile from './Profile';


function MainContent() {
  const [records, setRecords] = useState([])

  return (
    <div className={styles.mainContent}>
      <Header />
      <div className={styles.mainContent__content}>
        <div className={styles.content}>
          <Switch>
            <Route
              path="/профиль"
              render={() => (
                <Profile
                  records={records.slice(0, 2)}
                  recordsLength={records.slice(2, records.length).length}
                  setRecords={setRecords}
                />)}
            />
            <Route
              exact
              path={`/моизаписи`}
              render={() => (
                <MyRecords
                  records={records}
                  setRecords={setRecords}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default MainContent;