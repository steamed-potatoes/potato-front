import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import SignUpBody from './SignUpBody';

const Wrapper = styled.div`
  margin-top: 24px;
`;

const SignUp = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <SignUpBody />
    </Wrapper>
  );
};

export default SignUp;
