import React from 'react';
import styled from 'styled-components';
import { HeaderMenu } from 'components/header/HeaderMenu';
import BackgroundImg from 'images/BackgroundImg.png';
import LoginBody from './LoginBody';

const Wrapper = styled.div`
  height: 100vh;
  margin: 0;

  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
