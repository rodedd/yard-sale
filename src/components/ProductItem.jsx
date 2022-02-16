import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import iconAddToCart from '@icons/bt_add_to_cart.svg';
import iconAddedToCart from '@icons/bt_added_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart, removeFromCart } = useContext(AppContext);

  const handleClick = (item) => {
    if (!state.cart.includes(item)) {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };

  const handleIcon = (item) => {
    if (!state.cart.includes(item)) {
      return iconAddToCart;
    } else {
      return iconAddedToCart;
    }
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={handleIcon(product)} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
