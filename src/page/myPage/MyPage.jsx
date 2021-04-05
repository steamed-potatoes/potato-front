import React from 'react';
import styled from 'styled-components';
import { BsFillCircleFill } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

const MyPage = () => {
return (
  <Main>
    <ProfileBox>
      <EditProfile>Edit Profile</EditProfile>
      <Line />
      <PhotoBox>
        <BsFillCircleFill size="389" color="gray" />
        <CameraBtn><FiCamera size="80" /></CameraBtn>
      </PhotoBox>
      <TextBox>
        <List>
          <ListItem><MainName>이서윤</MainName></ListItem>
          <hr />
          <ListItem>김이선</ListItem>
          <ListItem>시간디자인과</ListItem>
          <ListItem>201710083</ListItem>
          <ListItem>이메일</ListItem>
          <hr />
          <ListItem> <GroupName>디자인 온 </GroupName></ListItem>
        </List>
      </TextBox>
    </ProfileBox>
  </Main>
  );
};
// 배경이미지 왜안되는지 모르겟슴...
const Main = styled.div`
  width : 100vw;
  height : 100vh;
  background-image: url("src/asset/img/background.png");
`
const ProfileBox = styled.div`
  margin: auto;
  margin-top: 56px;
  display: flex;
  justify-content: space-around;
  width : 1648px;
  height : 760px;
  flex-flow : row wrap;
  box-shadow: -20px 30px 15px gray; 
`;
const EditProfile = styled.div`
  width : 1640px;
  margin-left: 48px;
  margin-top : 8px;
  font-size : 56px;
  align-self: flex-start; 
`
const PhotoBox = styled.div`
  position : relative;
  height : 400px;
`;
const CameraBtn = styled.button`
  position : absolute;
  border : none;
  right : 24px;
  bottom : 24px;
  z-index: 1;
  cursor : pointer;
`;
const TextBox = styled.div`
  height : 480px;
`;
const List = styled.ul`
  list-style:none;
  width : 880px;
`;
const MainName  = styled.span`
  font-size: 58px;
  letter-spacing : 30px;
`;
const GroupName  = styled.span`
  font-size: 30px;
  word-spacing : 30px;
`;
const ListItem = styled.li`
  margin-bottom : 32px;
`
const Line = styled.hr`
  width : 1640px;
  height : 0px;
  border : 1px solid gray;
  margin-top : -48px;
`
export default MyPage;