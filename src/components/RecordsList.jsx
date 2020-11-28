import React from 'react';
import styles from './RecordsList.module.css'
import classNames from 'classnames'

function RecordsList({ records }) {
  return (
    <ul className={styles.records__list}>
      {
        records.map(record => (
          <li className={classNames(styles.records__item, styles.item)} key={record.id}>
            <div className={styles.item__date}>{record.date}</div>
            <div className={styles.item__location}>{record.location}</div>
            <div className={classNames(styles.item__row, styles.row)}>
              <div className={styles.row__left}>
                <img src={require(`../pics/${record.img}`)} alt="" />
                <div className={styles.row__details}>
                  <div className={styles.item__name}>{record.name}</div>
                  <div className={styles.item__specialization}>{record.specialization}</div>
                </div>
              </div>
              <div className={styles.row__right}>
                <button className={styles.item__btn}>Отменить</button>
              </div>
            </div>
          </li>))
      }
    </ul >
  );
}

export default RecordsList;