import React from 'react';
import styled from 'styled-components';
import { HeaderMenu } from 'components/header/index';
import { LineBox, TitleBox, PhotoBox, TextBox } from './index';
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
      </ProfileBox>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileBox = styled.div`
  margin: auto;
  margin-top: 56px;
  background-color: white;
  display: flex;
  border-radius: 40px;
  width: 1648px;
  height: 760px;
  flex-flow: row wrap;
  box-shadow: 9px 9px 9px gray;
`;


export default MyPage;
