import React from 'react';
import styled from 'styled-components';
import LoginBodyButton from './LoginBodyButton';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 160px;
  
`;

const Title = styled.p`
  margin: 0px;

  font-size: 56px;
`;

const SubTitle = styled.p`
  margin: 8px 0px 16px 0px;

  font-size: 16px;
`;

const LoginBody = () => {
  return (
    <LoginWrapper>
      <Title>슬기로운 감자생활</Title>
      <SubTitle>
        이용하시려면 하단의 아이디로 로그인 하기를 클릭 하세오
      </SubTitle>
      <LoginBodyButton />
    </LoginWrapper>
  );
}

export default LoginBody;