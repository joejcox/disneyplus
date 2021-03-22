import { useState } from "react";
import { auth } from "../lib/firebase";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIn = (e, email, password) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });

    clearForm();
  };

  return (
    <section className={styles.sign_in}>
      <Link to="/">
        <Logo />
      </Link>
      <h1 className={styles.sign_in__title}>Log in with your email</h1>
      <form
        id="sign_in"
        method="POST"
        onSubmit={(e) => handleSignIn(e, email, password)}
      >
        <input
          type="text"
          aria-label="Enter the email you'd like to use to log in to Disney Plus"
          name="email"
          onChange={(e) => handleInputChange(e)}
          placeholder="Email"
          value={email}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
          placeholder="Password"
          value={password}
          className={styles.input}
        />
        <Button
          large
          type="submit"
          extraStyles={{
            maxWidth: "100%",
            padding: ".8rem",
            fontSize: ".9rem",
            fontWeight: "bold",
            marginTop: "1.5rem",
          }}
        >
          Continue
        </Button>
      </form>
    </section>
  );
};

export default SignIn;
