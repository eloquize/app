import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
`;

const Logo = styled.span`
  font-size: 36px;
`;

const NavOption = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export default function NavBar() {
  return (
    <Container>
      <LeftContainer>
        <Logo>
          <Link to="/questions">
            eloquize
          </Link>
        </Logo>
        <NavOption>
          <Link to="/stats">
            summary
          </Link>
        </NavOption>
        <NavOption>add question</NavOption>
      </LeftContainer>
      <RightContainer>
        <NavOption>
          <Link to="/">
            log out
          </Link>
        </NavOption>
      </RightContainer>
    </Container>
  );
};