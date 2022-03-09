import logo from "./logo.svg";
import "./App.css";
import { auth } from "./firebase";
import { useState } from "react";
import emailjs, { init } from "@emailjs/browser";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");

	const sendMail = () => {
		init("user_ODH2Q19DlzaSRBQ0pbuBK");
		emailjs
			.send("service_0ibu4yr", "template_d7dkd7m", {
				to_email: email,
				to_name: displayName,
			})
			.then(
				function (response) {
					console.log(
						"SUCCESS!",
						response.status,
						response.text,
					);
				},
				function (error) {
					console.log("FAILED...", error);
				},
			);
	};

	const handleDisplayNameChange = (e) => {
		setDisplayName(e.target.value);
		console.log(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		console.log(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(
			email,
			password,
		).then((auth) => {
			if (auth) {
				console.log(auth.user.displayName);
			}
		});
	};

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(
			email,
			password,
		).then((auth) => {
			auth.user.updateProfile({
				displayName: displayName,
			});
			sendMail();
			console.log(auth.user.email);
		});
	};

	return (
		<div className="App">
			<h1>APF Dashboard</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
          placeholder="Full Name"
					onChange={(e) =>
						handleDisplayNameChange(e)
					}
					type={"text"}
					required
				/><br/><br/>
				<input
        placeholder="HCL Email ID"
					onChange={(e) => handleEmailChange(e)}
					type={"email"}
					required
				/><br/><br/>
				<input
        placeholder="Password"
					onChange={(e) =>
						handlePasswordChange(e)
					}
					type={"password"}
					required
				/><br/><br/>
				<button onClick={signIn}>Sign In</button>
				<button onClick={register}>Register</button>
			</form>
		</div>
	);
}

export default App;
