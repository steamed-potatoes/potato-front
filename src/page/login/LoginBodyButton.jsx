import React from 'react';
import styled from 'styled-components';
import { GoogleButton, GoogleArrow } from 'components/google/index';

const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin: 24px 0px 0px 0px;
  padding: 16px 32px 16px 32px;
  width: 720px;

  border: 0px solid #ffffff;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 0px 24px 3px -16px #cfcece;

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

  margin: 16px 24px 16px 24px;
  
  font-size: 24px;
`;

const LoginBodyButton = () => {
  return (
    <LoginButton>
      <GoogleButton />
      <LoginButtonText>구글 아이디로 시작하기</LoginButtonText>
      <GoogleArrow />
    </LoginButton>
  );
}

export default LoginBodyButton;