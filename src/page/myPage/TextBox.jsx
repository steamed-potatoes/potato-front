import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { DEFAULT_PROFILE } from 'constant/defaultProfileIMG';

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
const Select = styled.select`
  width: 512px;

  border: none;
  border-bottom: solid 2px #cfcece;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #808080;
  }
  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;

export const TextBox = () => {
  // select할 state들
  // 삭제할 것들
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [myProfileUrl, setMyProfileUrl] = useState(DEFAULT_PROFILE);

  const [majorsForm, setMajorsFrom] = useState([{ majorCode: '', major: '' }]);
  const [myMajor, setMyMajor] = useState([
    { majorCode: 'IT_ICT', major: 'ICT융합학과' },
  ]);
  const [classNumber, setClassNumber] = useState('');

  const [groupNameList, setGroupNameList] = useState([]);

  const fetchData = async () => {
    try {
      const { data: getMyProfile } = await sendApi.getMyProfile();
      const {
        email,
        name,
        major: MD,
        classNumber,
        profileUrl,
      } = getMyProfile.data;
      // 각각의 state들 변경하는 액션함수만들기
      setName(name); // 디스패치, 이름헷갈리니 변경할것
      setEmail(email); // 디스패치, 이름헷갈리니 변경할것
      setMyProfileUrl(profileUrl); // 디스패치, 이름헷갈리니 변경할것
      setClassNumber(classNumber);
      setMyMajor({ major: MD.major, majorCode: MD.majorCode });

      const { data: groupListData } = await sendApi.getMyGroupList();
      setGroupNameList(groupListData.data.map((data) => data.name));

      const { data: majors } = await sendApi.getMajors();
      setMajorsFrom(
        majors.data.map((data) => ({
          majorCode: data.majorCode,
          major: data.major,
        }))
      );
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ChoiceMajor = (e) => {
    setMyMajor({ ...myMajor, majorCode: e.target.value });
  };

  const handleClick = async () => {
    try {
      await sendApi.putMyProfile({
        name, //state넘기기
        profileUrl: myProfileUrl, // state넘기기
        major: myMajor.majorCode,
        classNumber,
      });
      alert('내 정보 수정완료');
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
            value={name} // state
            onChange={(e) => setName(e.target.value)} //디스패치
          />
        </PTag>
        <PTag>
          학과 :{' '}
          <Select type="text" value={majorsForm.major} onChange={ChoiceMajor}>
            {majorsForm.map((data) => (
              <Option
                key={data.majorCode}
                value={data.majorCode}
                selected={data.majorCode === myMajor.majorCode}
              >
                {data.major}
              </Option>
            ))}
          </Select>
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
            value={email} // state
            onChange={(e) => setEmail(e.target.value)} // 액션생성함수
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
