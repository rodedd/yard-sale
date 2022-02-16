import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

import flechita from '@icons/flechita.svg';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const today = new Date(Date.now()).toLocaleString().split(', ')[0];

  const sumTotal = () => {
    const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return sum;
  };

  return (
    <div className={styles.Checkout}>
      {console.log(cart)}
      <div className={styles['Checkout-container']}>
        <div className={styles['title-container']}>
          <Image src={flechita} alt="arrow" />
          <h1 className={styles.title}>My order</h1>
        </div>
        <div className={styles['Checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>{today}</span>
              <span>{cart.length} articles</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
        </div>
        {cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
