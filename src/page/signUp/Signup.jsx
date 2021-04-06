import React from 'react';
import styled from 'styled-components';
import {HeaderMenu} from 'components/header/index';
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
      <HeaderMenu />
      <SignUpBody />
    </Wrapper>
  );
};

export default SignUp;
