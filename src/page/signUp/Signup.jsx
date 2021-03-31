import React from 'react';
import styled from 'styled-components';

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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  width: 480px;
  height: 560px;
  margin: 16px auto;
  padding: 16px 32px 16px 32px;
  
  border: 0px solid #FFFFFF;
  border-radius: 48px;
  background-color: #FFFFFF;
  box-shadow: -16px 16px 3px 0px #CFCECE;
`;

const Title = styled.p`
  margin: 16px;
  
  font-size: 56px;
`;

const InputList = styled.div`
  align-items: left;

  margin: 16px;
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
  width: 400px;
  margin: 40px auto;
  padding: 16px 0px;

  
  color: #FFFFFF;
  border: none;
  border-radius: 48px;
  background-color: #F0B138;

  font-size: 24px;

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
