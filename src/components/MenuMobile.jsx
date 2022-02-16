import React from 'react';

import iconClose from '@icons/icon_close.png';

import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = ({ handleToggleMenu }) => {
  return (
    <div className={styles.MenuMobile}>
      <img src={iconClose} alt="icon close" className="icon-close" onClick={handleToggleMenu} />
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;