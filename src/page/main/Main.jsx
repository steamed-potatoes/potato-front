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
import BackgroundImg from '../../images/BackgroundImg.png';

const Wrapper = styled.div`
  height: 100%;
  background-image: url(${BackgroundImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: auto;
  padding-bottom: 560px;
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
