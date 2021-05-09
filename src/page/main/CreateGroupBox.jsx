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
  margin-top: 100px;
  width: 1136px;
  height: 560px;
`;
const CreateGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 560px;
  width: 568px;
`;
const FindGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
  width: 568px;
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const ApplyBtn = styled.button`
  border: none;
  margin-top: 30px;
`;
const BtnDiv = styled.div`
  background: gray;
  width: 336px;
  height: 63px;
  color: white;
  font-size: 30px;
  padding-top: 20px;
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
          <ApplyBtn>
            <BtnDiv>그룹 신청하기→</BtnDiv>
          </ApplyBtn>
        </CreateGroup>
        <FindGroup>
          <Title>신규 그룹 살펴보기</Title>
          {newGroupList.length ? (
            newGroupList.map((data) => <ClubList itemData={data} />)
          ) : (
            <NoneClubList />
          )}
        </FindGroup>
      </CreateGroupBoxWrraper>
    </Wrap>
  );
};

export default CreateGroupBox;
