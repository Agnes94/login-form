import React from 'react'
import { Login } from './Components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ResetPassword } from './Components/ResetPassword';
import { Signup } from './Components/Signup';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
