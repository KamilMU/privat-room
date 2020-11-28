import React from 'react';
import classNames from 'classnames';
import styles from './ECards.module.css';
import { NavLink } from 'react-router-dom';

function ECards(props) {
  return (
    <div className={styles.ecards}>
      <div className={styles.ecards__tittle}>Электронная карта</div>
      <ul className={styles.ecards__list}>
        {/* ecard 1 */}
        <li>
          <NavLink
            to="#"
            className={classNames(styles.ecards__item, styles.ecard)}
            activeClassName={styles.active}>
            <div className={styles.ecard__left}>
              <img
                src={require("../pics/icons/report 1.png")}
                alt=""
                className={styles.ecard__icon}
              />
            </div>
            <div className={styles.ecard__right}>
              <div className={styles.ecard__tittle}>Информация о пациенте</div>
              <div className={classNames(styles.ecard__description, styles.description)}>
                <ul className={styles.description__list}>
                  <li className={styles.description__item}>Ваши личные данные</li>
                  <li className={styles.description__item}>Рекомендации врачей</li>
                  <li className={styles.description__item}>История болезней</li>
                </ul>
              </div>
            </div>
          </NavLink>
        </li>
        {/* ecard 2 */}
        <li>
          <NavLink
            to="2"
            className={classNames(styles.ecards__item, styles.ecard)}
            activeClassName={styles.active}>
            <div className={styles.ecard__left}>
              <img
                src={require("../pics/icons/lab 1.png")}
                alt=""
                className={styles.ecard__icon}
              />
            </div>
            <div className={styles.ecard__right}>
              <div className={styles.ecard__tittle}>Результаты анализов</div>
              <div className={classNames(styles.ecard__description, styles.description)}>
                Вы можете узнать здесь результаты своих анализов
            </div>
            </div>
          </NavLink>
        </li>
        {/* ecard 3 */}
        <li>
          <NavLink
            to="3"
            className={classNames(styles.ecards__item, styles.ecard)}
            activeClassName={styles.active}>
            <div className={styles.ecard__left}>
              <img
                src={require("../pics/icons/add 1.png")}
                alt=""
                className={styles.ecard__icon}
              />
            </div>
            <div className={styles.ecard__right}>
              <div className={styles.ecard__tittle}>Добавить  информацию</div>
              <div className={classNames(styles.ecard__description, styles.description)}>
                Добавляйте в свою электронную медицинскую карту новые данные
            </div>
            </div>
          </NavLink>
        </li>
        {/* ecard 4 */}
        <li>
          <NavLink
            to="4"
            className={classNames(styles.ecards__item, styles.ecard)}
            activeClassName={styles.active}>
            <div className={styles.ecard__left}>
              <img
                src={require("../pics/icons/clock 1.png")}
                alt=""
                className={styles.ecard__icon}
              />
            </div>
            <div className={styles.ecard__right}>
              <div className={styles.ecard__tittle}>История приемов</div>
              <div className={classNames(styles.ecard__description, styles.description)}>
                Вся информация о полученных услугах за все время хранится здесь
            </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ECards;