import React from 'react';
import styled from 'styled-components';
import sendApi from 'libs/api/sendApi';
import { GoogleButton } from 'components/google';

const Login = () => {
  // 백엔드 통신 모듈 호출 테스트
  const onTest = async () => {
    const { data } = await sendApi.onTest({ test: 'test' });

    return data;
  };

  return (
    <Wrapper>
      <div>아직 뭐하는건지 모름</div>
      <InputBox type="text" placeholder="Login" />
      <InputBox type="password" placeholder="Password" />
      <LoginBox onClick={onTest}>로그인</LoginBox>
      <ForgotContainer>
        <ForgotPassword>비밀번호 찾기</ForgotPassword>
        <ForgotId>아이디 찾기</ForgotId>
      </ForgotContainer>
      <GoogleButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const InputBox = styled.input`
  border: 1px solid #000;
  width: 320px;
  height: 24px;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 4px;
  outline: none;
`;

const LoginBox = styled.div`
  border: 1px solid #000;
  cursor: pointer;
  width: 336px;
  padding: 8px;
  background-color: #343434;
  color: #fff;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
  &: not(: hover) {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

const ForgotContainer = styled.div`
  display: flex;
  width: 354px;
`;

const ForgotPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #000;
  font-size: 16px;
  cursor: pointer;
  width: 176px;
  padding: 8px;
  outline: none;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
  &: not(: hover) {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

const ForgotId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 176px;
  padding: 8px;
  outline: none;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
  &: not(: hover) {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

export default Login;
