import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Calender from './Calender';

const Wrapper = styled.div``;

const Main = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <Logo />
      <Calender />
    </Wrapper>
  );
}

export default Main;