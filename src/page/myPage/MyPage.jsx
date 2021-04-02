import React from 'react';
import styled from 'styled-components';

const MyPage = () => {
return (
  <Main>
    <ProfileBox>
      <EditProfile>Edit Profile</EditProfile>
      <PhotoBox>
        <img src="data:image/jpeg;base64,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" width="390px" height="390px" />
        <CameraBtn><img src="data:image/jpeg;base64,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" width="50px" height="50px" /></CameraBtn>
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
  margin-top : 60px;
  display: flex;
  justify-content: space-around;
  width : 1645px;
  height : 762px;
  flex-flow : row wrap;
  box-shadow: -20px 30px 15px gray; 
`;
const EditProfile = styled.div`
  margin-left: 50px;
  font-size : 58px;
  flex : 1 1 100%;
  align-self: flex-start; 
`
const PhotoBox = styled.div`
  flex : 1;
`;
const CameraBtn = styled.button`
  position : absolute;
  left : 520px;
  top : 580px;
  z-index: 1;
`;
const TextBox = styled.div`
  flex : 3;
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