import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

import "./Login.css";


function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(
			email,
			password,
		).then((auth) => {
			history.push("/");
		});
	};

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(
			email,
			password,
		).then((auth) => {
			console.log(auth);
		});

		if (auth) {
			history.push("/");
		}
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-Mail</h5>
					<input
						type="email"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)
						}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) =>
							setPassword(e.target.value)
						}
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>
				</form>

				<p>
					This is an Amazon Clone and not an real
					website!!!
				</p>
				<button
					onClick={register}
					className="login__registerButton"
				>
					Create Account
				</button>
			</div>
		</div>
	);
}

export default Login;
