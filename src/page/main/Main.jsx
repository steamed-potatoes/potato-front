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
import UpButtonImg from '../../images/UpButtonImg.png';

const Wrapper = styled.div`
  height: 100%;
  background-image: url(${BackgroundImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 520px;
`;

const UpButton = styled.button`
  height: 82px;
  width: 82px;
  position: relative;
  bottom: 80px;
  left: 88%;
  border: none;
  background-color: white;
  background-image: url(${UpButtonImg});
  background-size: 56px;
  background-repeat: no-repeat;
  background-position: center;
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
      <UpButton />
    </Wrapper>
  );
};

export default Main;
