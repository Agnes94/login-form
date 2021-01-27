import React from 'react'
import { Login } from './Components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ResetPassword } from './Components/ResetPassword';
import { Signup } from './Components/Signup';
import { NavBar } from "Components/NavBar";
import styled from "styled-components";

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SiteContent = styled.div`
  flex: 1;
`;

export const App = () => {
  return (
    <SiteWrapper>
      <NavBar />
      <SiteContent>
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
      </SiteContent>
    </SiteWrapper>
  );
};
