import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const ResetPassword = (handleReset) => {

  const [userDetails, setUserDetails] = useState({ email: "" });


  const handleSubmit = e => {
    e.preventDefault();
    handleReset(userDetails);
  }

  const history = useHistory();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Reset password</h2>
        <div>
          <label>Email:</label>
          <input type="text" name="name" id="name" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
        </div>
      </div>
      <button type="submit" onClick={() => history.push("/login")}>Send reset request</button>
    </form>
  )
}