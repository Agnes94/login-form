import React, { useState } from 'react'
import { LoginForm } from './LoginForm';

export const Login = () => {

  const userCredentials = {
    email: "john@doe.com",
    password: "henlo123"
  }

  const [user, setUser] = useState({ email: "", });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div>
      {(user.email != "") ? (
        <div>
          <h1>Logged in!</h1>
          <button>Logout</button>
        </div>
      ) : (<LoginForm />)}
    </div>
  )

}

//conditional rendering