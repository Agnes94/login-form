import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { User } from "react-feather";
import { Lock } from "react-feather";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 15px 0;
  width: 100%;
  height: 40%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  margin-top: 150px;
`;

const Button = styled.button`
  background: rgb(4,49,98);
  color: white;
  font-size: 1em;
  border: 2px solid rgb(4,49,98);
  border-radius: 3px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 35px;
  margin-bottom: 5px;
  border: 2px solid rgb(223,223,223);
  border-radius: 5px;
  font-size: 16px;
  background: white;
  margin-top: 3px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const SubTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  cursor: pointer; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperInput = styled.div`
  position: relative;
`;

const InputIconContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

const StyledLink = styled.a`
  color: blue;
  text-decoration: rgb(242,242,242);
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
              <Input type="text" required name="name" placeholder="Email" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
            </WrapperInput>
            <WrapperInput>
              <InputIconContainer>
                <Lock size={iconSize} />
              </InputIconContainer>
              <Input required type="password" name="password"
                placeholder="Password" id="password" onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} />
            </WrapperInput>
          </div>
        </div>
        <Button type="submit">Login</Button>
      </Form>
      {error && <Container>
        <SubTitle onClick={() => history.push("/resetpassword")}>Forgot password?</SubTitle>
        <span onClick={() => history.push("/signup")}> No account? <StyledLink href="">Create one here!</StyledLink></span>
      </Container>}
    </Section>
  )
}