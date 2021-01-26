import React from 'react'
import styled from 'styled-components';
import globe from 'Assets/globe.svg'
import logout from 'Assets/logout.svg'


const Nav = styled.nav`
background: rgb(4,49,98);
height: 60px;
display: flex;
flex-direction: row;
justify-content: flex-end; 
padding-right: 20px;
`;

const Container = styled.div`
margin-top: 20px;
padding-right: 20px;
`;

export const NavBar = () => {
  return (
    <Nav>
      <Container>
        <img src={globe} />
      </Container>
      <Container>
        <img src={logout} />
      </Container>
    </Nav>
  )
}