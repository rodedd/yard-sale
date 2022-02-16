import React, { useContext } from 'react';

import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

import '@styles/Checkout.scss';
import flechita from '@icons/flechita.svg';

const Checkout = () => {
	const { state: { cart } } = useContext(AppContext);
	const today = new Date(Date.now()).toLocaleString().split(', ')[0];

	const sumTotal = () => {
		const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
		return sum;
	};

  return (
    <div className="Checkout">
			{console.log(cart)}
			<div className="Checkout-container">
				<div className="title-container">
					<img src={flechita} alt="arrow" />
					<h1 className="title">My order</h1>
				</div>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{today}</span>
							<span>{cart.length} articles</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
				</div>
				{cart.map((product) => (
					<OrderItem
						product={product}
						key={`orderItem-${product.id}`}
					/>
				))}
			</div>
		</div>
  );
}

export default Checkout;