import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';

const Wrapper = styled.div`
  height: 480px;
  margin-left: 50px;
`;
const Field = styled.form`
  width: 880px;
  margin-left: 100px;
`;

const Input = styled.input`
  font-size: 20px;
  margin-bottom: 32px;
  width: 400px;
  border: none;
  &:hover {
    border-bottom: 2px solid #808080;
  }
  &:focus {
    border-bottom: 2px solid #808080;
    outline: none;
  }
`;
const BoldInput = styled.input`
  font-size: 24px;
  margin-bottom: 32px;
  width: 400px;
  font-weight: bold;
  border: none;
  &:hover {
    border-bottom: 2px solid #808080;
  }
  &:focus {
    border-bottom: 2px solid #808080;
    outline: none;
  }
`;
const PTag = styled.p`
  color: gray;
`;
const ModifyBtn = styled.button`
  position: relative;
  bottom: 70px;
  left: 750px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  background-color: white;
  width: 214px;
  height: 42px;
  box-shadow: 3px 3px 3px gray;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    transform: scale(1.3);
  }
`;
export const TextBox = () => {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [email, setEmail] = useState('');
  const [myProfileUrl, setMyProfileUrl] = useState('');
  const [groupNameList, setGroupNameList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: getMyProfile } = await sendApi.getMyProfile();
        const {
          email,
          name,
          major,
          classNumber,
          profileUrl,
        } = getMyProfile.data;
        setName(name);
        setMajor(major);
        setClassNumber(classNumber);
        setEmail(email);
        setMyProfileUrl(profileUrl);

        const { data: groupListData } = await sendApi.getMyGroupList();
        setGroupNameList(groupListData.data.map((data) => data.name));
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    fetchData();
  }, []);
  const handleClick = async () => {
    try {
      await sendApi.putMyProfile({
        name,
        myProfileUrl,
        major,
        classNumber,
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <Field>
        <PTag>
          이름 :{' '}
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </PTag>
        <PTag>
          학과 :{' '}
          <Input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </PTag>
        <PTag>
          학번 :{' '}
          <Input
            type="text"
            value={classNumber}
            onChange={(e) => setClassNumber(e.target.value)}
          />
        </PTag>
        <PTag>
          이메일 :{' '}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </PTag>
        <hr />
        <PTag>
          소속 동아리 :{' '}
          <BoldInput
            type="text"
            value={
              groupNameList.length === 0
                ? '아직 가입한 동아리가 없습니다.'
                : groupNameList
            }
          />
        </PTag>
      </Field>
      <ModifyBtn onClick={handleClick}>수정</ModifyBtn>
    </Wrapper>
  );
};
