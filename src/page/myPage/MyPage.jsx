import React from 'react';
import styled from 'styled-components';
import { HeaderMenu } from 'components/header/index';
import { LineBox, TitleBox, PhotoBox, TextBox } from './index';
import BackgroundImg from '../../images/BackgroundImg.png';

// req 부분에 객체 넣어야 함

const MyPage = () => {
  //  클릭하면 변경된 객체들이 req가되어서 들어가야함
  // req는 이름,학과,학번,이메일

  // state들을 이 컴포넌트에서 관리해서 props로 TextBox컴포넌트에 넘겨줘야하나
  // 이렇게 안하면 버튼 클릭 이벤트에서 state를 수정하기 힘들 것 같음

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
