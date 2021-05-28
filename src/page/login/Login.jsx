import React from 'react';
import styled from 'styled-components';
import BackgroundImg from 'images/BackgroundImg.png';
import { LoginHeader } from './LoginHeader';
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
      <LoginHeader />
      <LoginBody />
    </Wrapper>
  );
};

export default Login;
