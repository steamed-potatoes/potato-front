import React from 'react';
import styled from 'styled-components';
import {SignUpHeader} from './SignUpHeader';
import SignUpBody from './SignUpBody';
import BackgroundImg from '../../images/BackgroundImg.png';

const Wrapper = styled.div`
  height: 100vh;
  margin: 0;
  
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpHeader />
      <SignUpBody />
    </Wrapper>
  );
};

export default SignUp;
