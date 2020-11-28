import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames'
import styles from './Records.module.css'
import data from '../data/records.json'
import { Link } from 'react-router-dom';
import RecordsList from './RecordsList';

function Records({ url, records, recordsLength, setRecords }) {
  useEffect(() => {
    setRecords(data.records)
  }, [records])

  return (
    <div className={styles.records}>
      <div className="route-name">Записи на прием</div>
      <div className={styles.records__content}>
        <div className={styles.records__left}>
          <RecordsList records={records} />
        </div>
        <div className={styles.records__right}>
          <div>Еще {recordsLength} записи</div>
          <Link to={`/моизаписи`}>Подробнее</Link>
        </div>
      </div>
    </div>
  );
}

export default Records;