import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
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
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "rgb(4,49,98)" : "rgb(4,49,98)"};
  color: ${props => props.primary ? "white" : "white"};
  font-size: 1em;
  margin: 0.5em;
  margin-left: 0;
  border: 2px solid rgb(4,49,98);
  border-radius: 3px;
  width: 100%;
  height: 50px;
  cursor: pointer;
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

export const ResetPassword = (handleReset) => {

  const [userDetails, setUserDetails] = useState({ email: "" });


  const handleSubmit = e => {
    e.preventDefault();
    handleReset(userDetails);
  }

  const history = useHistory();

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <div>
          <Title>Reset password</Title>
          <div>
            <WrapperInput>
              <InputIconContainer>
                <Lock size={iconSize} />
              </InputIconContainer>
              <Input type="email" name="email"
                placeholder="Email" id="email" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
            </WrapperInput>
          </div>
          <Button type="submit" onClick={() => history.push("/login")}>Send request</Button>
        </div>
      </Form>
    </Section>
  )
}