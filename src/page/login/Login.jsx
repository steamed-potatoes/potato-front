import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import LoginBody from './LoginBody';

const Wrapper = styled.div`
  margin-top: 24px;
`;

const Login = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <LoginBody />
    </Wrapper>
  );
};

export default Login;
