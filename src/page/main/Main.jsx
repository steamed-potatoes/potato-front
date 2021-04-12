import React from 'react';
import styled from 'styled-components';
import { HeaderMenu } from 'components/header';
import Logo from './Logo';
import Calender from './Calender';
import BoardCategory from './BoardCategory';
import NewBoardView from './NewBoardView';
import CreateGroupBox from './CreateGroupBox';
import PopularGroup from './PopularGroup';
import Intermissionless from './Intermissionless';

const Wrapper = styled.div`
  margin-bottom: 4%;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <Logo />
      <Calender />
      <CreateGroupBox />
      <PopularGroup />
      <Intermissionless />
      <BoardCategory />
      <NewBoardView />
    </Wrapper>
  );
};

export default Main;
