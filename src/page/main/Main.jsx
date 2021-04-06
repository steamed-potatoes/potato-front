import styled from 'styled-components';

function Main() {
  return (
    <Wrap>
      <CreateGroupBox>
        <CreateGroup>
          <Title>새로운 그룹 만들기</Title>
          신규 그룹을 만들어 다양한 사람들을 만나 보세요
          <ApplyBtn>
            <BtnDiv>그룹 신청하기→</BtnDiv>
          </ApplyBtn>
        </CreateGroup>
        <FindGroup>
          <Title>신규 그룹 살펴보기</Title>
          <ClubList>
            <ListItem><ClubInfo>새로운 동아리 설명이 써있습니다</ClubInfo><ClubPicture /></ListItem>
            <hr />
            <ListItem><ClubInfo>새로운 동아리 설명이 써있습니다</ClubInfo><ClubPicture /></ListItem>
            <hr />
            <ListItem><ClubInfo>새로운 동아리 설명이 써있습니다</ClubInfo><ClubPicture /></ListItem>
          </ClubList>
        </FindGroup>
      </CreateGroupBox>
    </Wrap>
  );
}
const Wrap = styled.div`
  display : flex;
  justify-content: center;
  align-items : center;
`
const CreateGroupBox = styled.div`
  display: flex;
  margin-top : 100px;
  width : 1136px;
  height : 560px;
`
const CreateGroup = styled.div`
  display: flex;
  flex-direction : column;
  align-items : flex-start;
  height : 560px;
  width : 568px;
`
const FindGroup = styled.div`
  display: flex;
  flex-direction : column;
  height : 560px;
  width : 568px;
`
const Title = styled.div`
  font-size : 48px;
  font-weight: bold;
  margin-bottom : 8px;
`;
const ApplyBtn = styled.button`
  border : none;
  margin-top : 30px;
`;
const BtnDiv = styled.div`
  background : gray;
  width : 336px;
  height : 63px;
  color : white;
  font-size : 30px;
  padding-top : 20px;
`;
const ClubList = styled.ul`
  width : 524px;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  height : 136px;
  position : relative;
`;
const ClubPicture = styled.div`
  background: gray;
  width: 109px;
  height: 109px;
  position : absolute;
  right : 8px;
`;
const ClubInfo = styled.div`
  font-size : 24px;
`

export default Main;
