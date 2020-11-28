import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css'
import classNames from 'classnames'

function SideBar(props) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__upper}>
        <div href="#" className={styles.logo}>
          <a href="#">Логотип</a>
        </div>
        <ul className={styles.sidebar__list}>
          <li>
            <NavLink
              to="/профиль"
              className={classNames(styles.sidebar__item, styles.tab)}
              activeClassName={styles.active}>
              <img src={require("../pics/icons/heart 1.png")} alt="" />
              <span>Профиль</span>
            </NavLink>
          </li>
          <li >
            <a href="#" className={classNames(styles.sidebar__item, styles.tab)}>
              <img src={require("../pics/icons/vector.png")} alt="" />
              <span>Врачи и клиники</span>
            </a>
          </li>
          <li>
            <a href="#" className={classNames(styles.sidebar__item, styles.tab)}>
              <img src={require("../pics/icons/speak 1.png")} alt="" />
              <span>Сообщения</span>
            </a>
          </li>
          <li>
            <a href="#" className={classNames(styles.sidebar__item, styles.tab)}>
              <img src={require("../pics/icons/test 1.png")} alt="" />
              <span>Тестирование</span>
            </a>
          </li>
          <li>
            <a href="#" className={classNames(styles.sidebar__item, styles.tab)}>
              <img src={require("../pics/icons/book 1.png")} alt="" />
              <span>Полезно знать</span>
            </a>
          </li>
        </ul>
        <div  className={styles.sidebar__btn}>
          <a href="#">Подать заявку</a>
        </div>
      </div>
      <div className={styles.sidebar__footer}>
        <div>
          <a href="#" className={classNames(styles.tab)}>
            <img src={require("../pics/icons/help 1.png")} alt="" />
            <span>Помощь</span>
          </a>
        </div>
        <a href="#">
          <img src={require("../pics/logo.png")} alt="" />
        </a>
      </div>
    </div>
  );
}

export default SideBar;