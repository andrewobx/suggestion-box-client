import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../state';
import { logout } from '../state/auth/actions';

import Button from './button';
import { isTokenExpired } from '../utils/jwt';

const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #f2f2f2;
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
`;

const Right = styled.nav`
  flex: 1;
  text-align: right;
`;

const Title = styled.h1`
  margin: 0;
  color: #000;
  font-weight: 600;
`;

const Header = props => {
  const [{ auth }, dispatch] = useStateValue();

  const handleLogout = async () => {
    localStorage.clear();
    await dispatch(logout());
  };

  return (
    <Nav>
      <Title>DH Suggestion Box</Title>
      <Right>
        {!isTokenExpired() && (
          <Button primary onClick={() => handleLogout()}>
            Logout
          </Button>
        )}
      </Right>
    </Nav>
  );
};

export default Header;
