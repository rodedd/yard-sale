import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

import flechita from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const sumTotal = () => {
    const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <div className={styles['back-arrow']}>
          <Image layout='fill' src={flechita} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)} />
        </div>
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>

      <div className={styles.order}>
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
      </div>
      <button className={styles['primary-button']}>
        <Link href="/checkout">
          Checkout
        </Link>
      </button>
    </aside>
  );
};

export default MyOrder;
