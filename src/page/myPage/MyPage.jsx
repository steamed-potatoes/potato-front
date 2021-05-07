import React from 'react';
import styled from 'styled-components';
import {HeaderMenu} from 'components/header/index';
import { LineBox, TitleBox, PhotoBox,TextBox } from './index';
import BackgroundImg from '../../images/BackgroundImg.png';

const MyPage = () => {
  return (
    <Main>
      <HeaderMenu />
      <ProfileBox>
        <TitleBox />
        <LineBox />
        <PhotoBox />
        <TextBox />
        <ModifyBtn>수정</ModifyBtn>
      </ProfileBox>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
`;

const ProfileBox = styled.div`
  margin: auto;
  margin-top: 56px;
  background-color : white;
  display: flex;
  border-radius: 42px;
  width: 1648px;
  height: 760px;
  flex-flow: row wrap;
  box-shadow: 9px 9px 9px gray;
`;

const ModifyBtn = styled.button`
  position : relative;
  bottom : 70px;
  left : 1250px;
  font-weight: bold;
  border : none;
  border-radius : 25px;
  background-color : white;
  width : 214px;
  height : 42px;
  box-shadow: 3px 3px 3px gray;
  transition: transform 0.5s;
  &:hover {
    cursor : pointer;
    font-weight : bold;
	  transform: scale(1.3);
  };
`;

export default MyPage;
