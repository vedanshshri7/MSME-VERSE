import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const users = [];

export default function Register() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const account = users.find((user) => user.id === username);
		if (account && account.key === password) {
			if (username[0] === "a") navigate("/register");
			else if (username[0] === "s") alert("Hello student!!");
			else if (username[0] === "t") alert("hello teacher");
		} else {
			alert("invalid user!");
		}
	};

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">MSME VERSE</h3>
					<span className="loginDesc">
						Connect with MSME Networks Easily.
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Username" className="loginInput" />
						<input placeholder="Email" className="loginInput" />
						<input placeholder="Password" className="loginInput" />
						<input
							placeholder="Password Again"
							className="loginInput"
						/>
						<button className="loginButton">Sign Up</button>
						<button className="loginRegisterButton">
							Log into Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
