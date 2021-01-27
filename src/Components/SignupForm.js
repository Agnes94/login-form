import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { User } from "react-feather";
import { Lock } from "react-feather";

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
`;

const Button = styled.button`
  background: rgb(4,49,98);
  color: white;
  font-size: 1em;
  border: 2px solid rgb(4,49,98);
  border-radius: 3px;
  margin-left: 0px;
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

const iconSize = 20;

export const SignupForm = ({ handleSignup, error }) => {

  const [userDetails, setUserDetails] = useState({ password: "", email: "" });

  const handleSubmit = e => {
    e.preventDefault();
    handleSignup(userDetails);
  }

  const history = useHistory();

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <div>
          <Title>Create new account</Title>
          {(error != "") ? (<div>{error}</div>) : ""}
          <div>
            <WrapperInput>
              <InputIconContainer>
                <User size={iconSize} />
              </InputIconContainer>
              <Input type="text" name="name" placeholder="Email" minlength="2" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
            </WrapperInput>
            <WrapperInput>
              <InputIconContainer>
                <Lock size={iconSize} />
              </InputIconContainer>
              <Input type="password" name="password"
                placeholder="Password" id="password" minlength="2" required onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} />
            </WrapperInput>
          </div>
          <Button type="submit" onClick={() => history.push("/login")}>Register</Button>
        </div>
      </Form>
    </Section>
  )
}