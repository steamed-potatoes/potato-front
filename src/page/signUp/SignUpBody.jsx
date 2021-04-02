import React from 'react';
import styled from 'styled-components';
import SignUpBodyList from './SignUpBodyList';

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

const SignUpBody = () => {
  return (
    <InputWrapper>
      <Title>Sign up</Title>
      <SignUpBodyList />
      <Button>START</Button>
    </InputWrapper>
  );
}

export default SignUpBody;