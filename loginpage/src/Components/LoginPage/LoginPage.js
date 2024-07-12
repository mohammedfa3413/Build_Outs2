import React, { useState } from 'react';
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setMessage("");
      setSubmitted(true);
    } else {
      setMessage("Invalid username or password");
      setSubmitted(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Login Page</h1>

      <div>
        {submitted ? (
          <p>{`Welcome, ${username}!`}</p>
        ) : ""}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {message && <p className="error">{message}</p>}

        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={username}
            onChange={handleChangeUser}
            title={username === "" ? 'Please fill out this field' : ""}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            title={password === "" ? 'Please fill out this field' : ""}
          />
        </label>

        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
