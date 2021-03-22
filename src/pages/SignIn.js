import { useState } from "react";
import { auth } from "../lib/firebase";

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
    <section className="sign_in">
      <h1>Sign In</h1>
      <form
        id="sign_in"
        method="POST"
        onSubmit={(e) => handleSignIn(e, email, password)}
      >
        <input
          type="text"
          name="email"
          onChange={(e) => handleInputChange(e)}
          placeholder="Email"
          value={email}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
          placeholder="Password"
          value={password}
        />
        <button type="submit">Log In</button>
      </form>
    </section>
  );
};

export default SignIn;
