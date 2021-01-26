import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { User } from "react-feather";


const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Form = styled.form`
  margin: 15px 0;
  width: 90%;
  height: 40%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  text-align: center;
  align-items: center;
/*   @media (min-width: 668px) {
    width: 80%;
    padding: 20px 40px;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 50%; */
  }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "rgb(4,49,98)" : "rgb(4,49,98)"};
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 0.5em;
  border: 2px solid rgb(4,49,98);
  border-radius: 3px;
  width: 270px;
  height: 40px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px 30px;
  margin-bottom: 20px;
  border: 2px solid rgb(223,223,223);
  border-radius: 5px;
  font-size: 16px;
  background: white;
`;

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
margin-bottom: 10px;
`;

const WrapperInput = styled.div`
  position: relative;
`;

const InputIconContainer = styled.div`
  position: absolute;
`;

const iconSize = 20;

export const LoginForm = ({ handleLogin, error }) => {

  const [userDetails, setUserDetails] = useState({ password: "", email: "" });
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(userDetails);
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <div>
          <Title>Login</Title>
          {(error != "") ? (<div>{error}</div>) : ""}
          <div>
            <WrapperInput>
              <InputIconContainer>
                <User size={iconSize} />
              </InputIconContainer>
              <Input type="text" name="name" placeholder="Email" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
            </WrapperInput>
            <Input type="password" name="password"
              placeholder="Password" id="password" onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} />
          </div>
        </div>
        {error && <Container>
          <a onClick={() => history.push("/signup")}> No account?
        <a href="" >Create one here!</a>
          </a><a href="" onClick={() => history.push("/resetpassword")}>Forgot password?</a>
        </Container>}
        <Button type="submit">Login</Button>
      </Form>
    </Section>
  )
}