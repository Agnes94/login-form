import React, { useState } from 'react'

export const LoginForm = ({ handleLogin, error }) => {

  const [userDetails, setUserDetails] = useState({ password: "", email: "" });

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(userDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Login</h2>
        {/*Error*/}
        <div>
          <label>Email:</label>
          <input type="text" name="name" id="name" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
          <label>Password:</label>
          <input type="password" name="password" id="password" onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  )
}