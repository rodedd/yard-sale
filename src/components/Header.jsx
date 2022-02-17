import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Menu from '@components/Menu';
import MenuMobile from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder';

import iconMenu from '@icons/icon_menu.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrders(false);
  };

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
    setToggle(false);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleOrders(false);
  };

  const verifyCart = (numberItems) => {
    if (numberItems && numberItems > 9) {
      return '9+';
    } else {
      return numberItems;
    }
  };

  return (
    <nav className={styles.Header}>
      <img src={iconMenu.src} alt="menu" className={styles.menu} onClick={handleToggleMenu} />
      {toggleMenu ? <MenuMobile handleToggleMenu={handleToggleMenu} /> : null}

      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>
        </Link>

        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            email@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrders}>
            <Image src={iconShoppingCart} alt="shopping cart" width={24}/>
            {cart.length > 0 ? <div>{verifyCart(cart.length)}</div> : null}
          </li>
        </ul>
      </div>
      {toggleOrders ? <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} /> : null}
      {toggle ? <Menu /> : null}
    </nav>
  );
};

export default Header;
