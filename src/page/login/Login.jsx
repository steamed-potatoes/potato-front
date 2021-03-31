import React from 'react';
import styled from 'styled-components';
import { GoogleButton, GoogleArrow } from 'components/google/index';

const Wrapper = styled.div`
  margin-top: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72px;
  padding: 16px;

  font-size: 24px;
`;

const Manager = styled.div``;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;

const MenuItem = styled.li`
  float: right;

  display: block;

  padding: 16px 16px;
`;

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

const Login = () => {
  return (
    <Wrapper>
      <Header>
        <Manager>관리자</Manager>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Login</MenuItem>
        </MenuList>
      </Header>
      <LoginWrapper>
        <Title>슬기로운 감자생활</Title>
        <SubTitle>
          이용하시려면 하단의 아이디로 로그인 하기를 클릭 하세오
        </SubTitle>
        <LoginButton>
          <GoogleButton />
          <LoginButtonText>구글 아이디로 시작하기</LoginButtonText>
          <GoogleArrow />
        </LoginButton>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;
