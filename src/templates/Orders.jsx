import React, { useContext } from 'react';

import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

import styles from '@styles/Orders.module.scss';

const Orders = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <div className={styles.Orders}>
      <div className={styles['Orders-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['Orders-content']}>
          {cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
