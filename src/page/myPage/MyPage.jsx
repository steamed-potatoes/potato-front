import React from 'react';
import styled from 'styled-components';
import { BsFillCircleFill } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

const MyPage = () => {
return (
  <Main>
    <ProfileBox>
      <EditProfile>Edit Profile</EditProfile>
      <PhotoBox>
        <BsFillCircleFill size="389" color="gray" />
        <FiCamera type="button" size="50" />
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
const Main = styled.div`
  
`
const ProfileBox = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width : 1645px;
  height : 762px;
  flex-flow : row wrap;
  box-shadow: -20px 30px 15px gray; 
`;
const EditProfile = styled.div`
  width : 1645px;
  margin-left: 50px;
  font-size : 58px;
  align-self: flex-start; 
`
const PhotoBox = styled.div`
  position : relative;
`;
// const CameraBtn = styled.button`
//   position : absolute;
//   left : 520px;
//   top : 580px;
//   z-index: 1;
// `;
const TextBox = styled.div`
`;
const List = styled.ul`
  list-style:none;
`;
const MainName  = styled.span`
  font-size: 58px;
  letter-spacing : 30px;
`;
const GroupName  = styled.span`
  font-size: 30px;
  letter-spacing : 30px;
`;
const ListItem = styled.li`
  margin-bottom : 15px;
`
export default MyPage;