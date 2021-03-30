import React from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineArrowRight } from "react-icons/ai";

const Wrapper = styled.div`
  margin-top : 24px;
`;

const Header = styled.div`
  font-size : 24px;
  height : 72px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Manager = styled.div``;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  float : right;
  display : block;
  padding: 16px 16px;
`;

const LoginWrapper = styled.div`
  margin-top : 160px;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`;

const Title = styled.p`
  margin : 0px;
  font-size : 56px;
`;

const SubTitle = styled.p`
  margin : 8px 0px 16px 0px;
  font-size : 16px;
`;

const LoginButton = styled.button`
  margin : 24px 0px 0px 0px;
  padding : 16px 32px 16px 32px;
  width: 720px;
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  align-items : center;
  background-color: white;
  border: 0px solid white;
  border-radius: 48px;
  box-shadow: 0px 24px 3px -16px #cfcece;
  &:hover {
    cursor: pointer;
    border: 1px solid #cfcece;
  }
  &:focus { outline:none; }
`;

const LoginButtonText = styled.p`
 margin : 16px 24px 16px 24px;
 display : block;
 font-size : 24px;
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
          <FcGoogle size="88px" />
          <LoginButtonText>구글 아이디로 시작하기</LoginButtonText>
          <AiOutlineArrowRight size="40px" />
        </LoginButton>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;
