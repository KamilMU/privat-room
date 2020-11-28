import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ECards from './ECards';
import MyRecords from './MyRecords';
import styles from './Profile.module.css'
import Records from './Records';

function Profile({ records, recordsLength, setRecords }) {
  return (
    <div className={styles.profile}>
      <Records
        records={records}
        recordsLength={recordsLength}
        setRecords={setRecords}
      />
      <ECards />
    </div>
  );
}

export default Profile;