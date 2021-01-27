import React, { useState } from 'react'
import { LoginForm } from './LoginForm';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "rgb(4,49,98)" : "rgb(4,49,98)"};
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 0.5em;
  border: 2px solid rgb(4,49,98);
  border-radius: 3px;
  width: 235px;
  height: 60px;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 80%;
`;

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
`;

export const Login = () => {

  const userAdmin = {
    email: "john@doe.com",
    password: "henlo123"
  }

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleLogin = (userDetails) => {
    if (
      userDetails.email === userAdmin.email &&
      userDetails.password === userAdmin.password
    ) {
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
    <Section>
      {(user.email != "") ? (
        <div>
          <Title>Logged in!</Title>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
          <div>
            < LoginForm handleLogin={handleLogin} error={error} />
          </div>
        )}
    </Section>
  );
}
