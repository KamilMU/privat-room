import React from 'react';
import styles from './Header.module.css'

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.header__content}>
          <div className={styles.header__left}>
            <div>Мой Профиль</div>
          </div>
          <div className={styles.header__right}>
            <img src={require("../pics/icons/search 1.png")} alt="" />
            <img src={require("../pics/icons/eye 1.png")} alt="" />
            <img src={require("../pics/icons/bell 1.png")} alt="" />
            <div className={styles.profilePic}>
              <img src={require("../pics/profile.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;