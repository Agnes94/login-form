import React from 'react'

export const LoginForm = () => {
  return (
    <div>
      <form>
        <div>
          <h2>Login</h2>
          {/*Error*/}
          <div>
            <label>Username:</label>
            <input type="text" name="name" id="name" />
            <label>Password:</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <label>Forgot password?</label>
      <label>No account? Create one here</label>
    </div>
  )
}

