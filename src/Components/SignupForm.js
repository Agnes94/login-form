import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const SignupForm = ({ handleSignup, error }) => {

  const [userDetails, setUserDetails] = useState({ password: "", email: "" });

  const handleSubmit = e => {
    e.preventDefault();
    handleSignup(userDetails);
  }

  const history = useHistory();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Create new account</h2>
        {(error != "") ? (<div>{error}</div>) : ""}
        <div>
          <label>Email:</label>
          <input type="text" name="name" id="name" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
          <label>Password:</label>
          <input type="password" name="password" id="password" onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} />
        </div>
      </div>
      <button type="submit" onClick={() => history.push("/login")}>Register</button>
    </form>
  )
}