import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Calender from './Calender';
import BoardCategory from './BoardCategory';
import NewBoardView from './NewBoardView';
import CreateGroupBox from './CreateGroupBox';

const Wrapper = styled.div``;

const Main = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <Logo />
      <Calender />
      <CreateGroupBox />
      <BoardCategory />
      <NewBoardView />
    </Wrapper>
  );
};

export default Main;
