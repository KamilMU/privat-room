import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MyRecords.module.css';
import Calendar from 'react-calendar';
import data from '../data/records.json'
import RecordsList from './RecordsList';

function MyRecords({ records, setRecords }) {
  useEffect(() => {
    setRecords(data.records)
    console.log(records)
  }, [records])

  return (
    <div className={classNames(styles.myRecords)}>
      <div className="route-name">
        <Link to={"/профиль"}>
          <img src={require('../pics/icons/назад.png')} alt=""/>
          <span>Мои записи</span>
        </Link>
      </div>
      <div className={classNames(styles.myRecords__content)}>
        <div className={styles.myRecords__left}>
          <RecordsList records={records} />
        </div>
        <div className={styles.myRecords__right}>
          <Calendar className={'react-calendar'} locale="ru-RU" />
        </div>
      </div>
    </div>
  );
}

export default MyRecords;