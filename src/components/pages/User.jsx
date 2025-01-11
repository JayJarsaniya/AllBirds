import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/User.css";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate(); 

  const handleAction = () => {
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Login successful!");
          console.log(userCredential.user);
          clearInputs();
          navigate("/"); 
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert(`Signup successful! Welcome, ${username}`);
          console.log(userCredential.user);
          clearInputs();
          navigate("/"); 
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Google login successful!");
        console.log(result.user);
        clearInputs();
        navigate("/"); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="full-page-container d-flex justify-content-center align-items-center">
      <div className="auth-card p-4 rounded shadow">
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Signup"}</h2>
        {!isLogin && (
          <input
            className="form-control mb-3 unique-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          className="form-control mb-3 unique-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-3 unique-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-primary w-100 mb-2 unique-button"
          onClick={handleAction}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
        <button
          className="btn btn-danger w-100 mb-3 unique-button"
          onClick={handleGoogleAuth}
        >
          Sign in with Google
        </button>
        <p className="text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-primary cursor-pointer unique-link"
            style={{ cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default User;
