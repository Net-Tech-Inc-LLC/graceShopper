import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { loginUser } from "../axios-services/users";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const user = await loginUser(username, password);
          if (user) {
            setUser(user);
            navigate("/");
          } else {
            setErrorMessage("Incorrect login!");
          }
        }}
      >
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="success" type="submit">
          Login
        </Button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <Link to="/register">Not registered? Click here</Link>
    </div>
  );
}
