import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import ClubList from './ClubList';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CreateGroupBoxWrraper = styled.div`
  display: flex;
  margin-top: 192px;
  width: 1136px;
  height: 560px;
`;
const CreateGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  height: 560px;
  width: 568px;
`;
const FindGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 560px;
  width: 568px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const AddGroupButton = styled.a`
  border: none;
  background-color: white;
  margin-top: 90px;
`;
const ButtonDiv = styled.div`
  background: #f0b138;
  border-radius: 40px;
  width: 336px;
  height: 63px;
  color: white;
  font-size: 30px;
  padding-top: 8px;
  text-align: center;
  font-weight: bold;
`;
const NoneClubList = styled.ul`
  width: 524px;
  list-style: none;
`;

const CreateGroupBox = () => {
  const [newGroupList, setNewGroupList] = useState([]);

  useEffect(() => {
    const getNewGroup = async () => {
      try {
        const { data } = await sendApi.getNewGroupList();
        setNewGroupList(data.data);
      } catch (e) {
        alert(e.reponse.data.message);
      }
    };
    getNewGroup();
  }, []);

  return (
    <Wrap>
      <CreateGroupBoxWrraper>
        <CreateGroup>
          <Title>새로운 그룹 만들기</Title>
          신규 그룹을 만들어 다양한 사람들을 만나 보세요
          <AddGroupButton href="/makeGroup">
            <ButtonDiv>그룹 신청하기→</ButtonDiv>
          </AddGroupButton>
        </CreateGroup>
        <FindGroup>
          <Title>신규 그룹 살펴보기</Title>
          {newGroupList.length ? (
            newGroupList.map((data) => (
              <ClubList itemData={data} key={data.id} />
            ))
          ) : (
            <NoneClubList />
          )}
        </FindGroup>
      </CreateGroupBoxWrraper>
    </Wrap>
  );
};

export default CreateGroupBox;
