import "./App.css";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useState } from "react";
import { auth } from "./firebase";
import Lesson1 from "./components/Lesson1";

function App() {
	const signin = (email, password) => {
		auth.signInWithEmailAndPassword(
			email,
			password,
		).then((auth) => {
			console.log(auth);
		});
	};

	const register = (email, password) => {
		auth.createUserWithEmailAndPassword(
			email,
			password,
		).then((auth) => {
			console.log(auth);
		});
	};

		const logout = () => {
      if (user) {
        auth.signOut()
      }
    }

  const [user, setUser] = useState("Guest");

    auth.onAuthStateChanged(authUser => {
      setUser(authUser);
    });

	const [currentLesson, setCurrentLesson] = useState("");


	const greetings = () => {
		const greet = ["Hola", "Namaste", "Hi", "Hello"];
		const int = Math.floor(Math.random() * 4);

		return greet[int];
	};

	return (
		<div className="App">
			<Header greet={greetings()} setCurrentLesson={setCurrentLesson} />
			{currentLesson === "" ? <Auth signin={signin} register={register} logout={logout} user={user} greetings={greetings} setCurrentLesson={setCurrentLesson}/> : <div>{currentLesson === "Lesson1" ? <Lesson1 user={user}></Lesson1> : <div></div>}</div>}
		</div>
	);
}

export default App;
