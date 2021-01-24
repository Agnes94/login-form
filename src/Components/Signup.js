import React, { useState } from 'react'
import { SignupForm } from './SignupForm';
import { useHistory } from 'react-router-dom'

export const Signup = () => {

  const userAdmin = {
    email: "",
    password: ""
  }

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSignup = (userDetails) => {
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

  return (
    <div>
      {(user.email != "") ? (
        <div>
          <h1>Logged in!</h1>
        </div>
      ) : (
          <div>
            <SignupForm handleSignup={handleSignup} error={error} />
            {error && <div> <a onClick={() => history.push("/login")}>
            </a></div>}
          </div>
        )}
    </div>
  );
}