import React, { useState } from 'react'
import { LoginForm } from './LoginForm';

export const Login = () => {

  const userAdmin = {
    email: "john@doe.com",
    password: "henlo123"
  }

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState("");

  const handleLogin = (userDetails) => {
    if (
      userDetails.email === userAdmin.email &&
      userDetails.password === userAdmin.password
    ) {
      console.log(userDetails);
      setUser({
        name: userAdmin.name,
        email: userAdmin.email,
      });
    } else {
      console.log("Forgot password?");
    }
  };

  const Logout = () => {
    console.log("Logout")
  }

  return (
    <div>
      {(user.email != "") ? (
        <div>
          <h1>Logged in!</h1>
          <button>Logout</button>
        </div>
      ) : (
          <LoginForm handleLogin={handleLogin} error={error} />
        )}
    </div>
  );
}
