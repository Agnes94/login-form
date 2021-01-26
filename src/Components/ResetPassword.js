import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

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
  margin-left: 15px;
  border: 2px solid rgb(4,49,98);
  border-radius: 3px;
  width: 240px;
  height: 40px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px 15px;
  margin-bottom: 20px;
  margin-right: 30px;
  border: 2px solid rgb(223,223,223);
  border-radius: 5px;
  font-size: 16px;
  background: white;
  font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

const Label = styled.label`
  width: 100%;
  padding: 5px 0;
`;

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
            <Label></Label>
            <Input type="text" name="name" placeholder="Email" onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} value={userDetails.email} />
          </div>
        </div>
        <Button type="submit" onClick={() => history.push("/login")}>Send request</Button>
      </Form>
    </Section>
  )
}