import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 24px;
`;

const Header = styled.div`
  font-size: 24px;
  height: 72px;
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
  float: right;
  display: block;
  padding: 16px 16px;
`;

const InputWrapper = styled.div`
  margin: 16px auto;
  padding: 16px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 480px;
  height: 560px;
  background-color: #FFFFFF;
  border: 0px solid #FFFFFF;
  border-radius: 48px;
  box-shadow: -16px 16px 3px 0px #CFCECE;
`;

const Title = styled.p`
  margin: 16px;
  font-size: 56px;
`;

const InputList = styled.div`
  margin: 16px;
  align-items: left;
`;

const InputSet = styled.div`
  margin: 40px;
`;

const InputName = styled.p`
  font-size: 8px;
`;

const Input = styled.input`
  width: 400px;
  border: none;
  border-bottom: solid 2px #CFCECE;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #808080;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin: 40px auto;
  padding: 16px 0px;
  width: 400px;
  font-size: 24px;
  background-color: #F0B138;
  color: #FFFFFF;
  border: none;
  border-radius: 48px;
  &:hover {
    cursor: pointer;
    border: 1px solid #CFCECE;
  }
  &:focus {
    outline: none;
  }
`;

const SignUp = () => {
  return (
    <Wrapper>
      <Header>
        <Manager>관리자</Manager>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Sign up</MenuItem>
        </MenuList>
      </Header>
      <InputWrapper>
        <Title>Sign up</Title>
        <InputList>
          <InputSet>
            <InputName>닉네임</InputName>
            <Input />
          </InputSet>
          <InputSet>
            <InputName>학과</InputName>
            <Input />
          </InputSet>
          <InputSet>
            <InputName>학번</InputName>
            <Input />
          </InputSet>
        </InputList>
        <Button>START</Button>
      </InputWrapper>
    </Wrapper>
  );
};

export default SignUp;
