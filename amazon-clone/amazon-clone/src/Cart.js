import React from "react";
import "./Cart.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js"

function Cart() {
	const [{basket, user}, dispatch] = useStateValue()
	return (
		<div className="cart">
			<div className="cart__left">
				<img
					className="cart__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JAN-ART-22/Rec/Update/Prime_With_CTA-PC.jpg"
				/>
				<div>
					<h3>{user.email}</h3>
					<h2 className="cart__title">
						Your Shopping Basket
					</h2>

					{basket.map(item => (
						<CheckoutProduct 
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="cart__right">
				<Subtotal/>
			</div>
		</div>
	);
}

export default Cart;
