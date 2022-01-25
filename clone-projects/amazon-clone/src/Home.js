import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				/>

				<div className="home__row first__row">
					<Product
						id={1}
						title="The Power of Your Subconscious Mind"
						price={19.99}
						image="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg"
						rating={4}
					/>
					<Product
						id={2}
						title="The Psychology of Money"
						price={14.99}
						image="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)"
						price={29.99}
						image="https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY327_FMwebp_QL65_.jpg"
						rating={4}
					/>
					<Product
						id={4}
						title="Ikigai: The Japanese secret to a long and happy life"
						price={9.99}
						image="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_QL65_.jpg"
						rating={3}
					/>
					<Product
						id={5}
						title="Pitch Perfect: How to Create a Brand People Cannot Stop Talking About"
						price={4.99}
						image="https://m.media-amazon.com/images/I/61thi6TWYYL._AC_UY327_QL65_.jpg"
						rating={2}
					/>
				</div>
				<div className="home__row">
					<Product
						id={6}
						title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_QL65_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
