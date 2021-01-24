import React, { useState } from 'react'
import { LoginForm } from './LoginForm';

export const Login = () => {

  const userAdmin = {
    email: "john@doe.com",
    password: "henlo123"
  }

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState(false);

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
      setError(true)
    }
  };

  const handleLogout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <div>
      {(user.email != "") ? (
        <div>
          <h1>Logged in!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <div>
            <LoginForm handleLogin={handleLogin} error={error} />
            {error && <div>User not found. Don't have an account? <a onClick={() => setUser({ name: "", email: "" })}> Click here.</a> </div>}
          </div>
        )}
    </div>
  );
}
