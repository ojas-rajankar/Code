import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
} from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider"

function App() {

	const [{}, dispatch] = useStateValue()

	useEffect (() => {
		auth.onAuthStateChanged(authUser => {
			console.log("User: ", authUser)

			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser
				})
			} else {
				dispatch({
					type: "SET_USER",
					user: null
				})
			}
		})
	}, [])

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/cart">
						<Header />
						<Cart />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;