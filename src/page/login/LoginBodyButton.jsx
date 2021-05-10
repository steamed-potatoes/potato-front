import React from 'react';
import styled from 'styled-components';
import { GOOGLE_AUTH_URL } from 'constant';
import { FcGoogle } from 'react-icons/fc';
import GoogleArrow from './GoogleArrow';

const LoginButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0px 0px 0px 0px;
  padding: 24px 36px 24px 36px;
  width: 720px;

  border: 0px solid #ffffff;
  border-radius: 96px;
  background-color: #ffffff;
  box-shadow: 9px 9px 6px rgb(0, 0, 0, 0.3);

  color: #000000;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 1px solid #cfcece;
  }
  &:focus {
    outline: none;
  }
`;

const LoginButtonText = styled.p`
  display: block;

  margin: 0px 24px;
  padding: 0px;

  font-size: 32px;
`;

const LoginBodyButton = () => {
  return (
    <LoginButton href={GOOGLE_AUTH_URL}>
      <FcGoogle size="50px" />
      <LoginButtonText>구글아이디로 시작하기</LoginButtonText>
      <GoogleArrow />
    </LoginButton>
  );
};

export default LoginBodyButton;
