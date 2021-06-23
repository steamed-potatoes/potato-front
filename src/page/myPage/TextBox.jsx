import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_PROFILE } from 'constant/defaultProfileIMG';
import * as actions from 'store/modules/user';

const Wrapper = styled.div`
  margin-top: 40px;
  margin-left: 50px;
  width: 500px;
  height: 480px;
`;
const Field = styled.form`
  width: 880px;
  margin-left: 100px;
`;

const Input = styled.input`
  font-size: 20px;
  border: none;
  &:hover {
    outline: none;
    font-weight: bold;
  }
  &:focus {
    outline: none;
    font-weight: bold;
  }
`;
const BoldInput = styled.input`
  font-size: 24px;
  margin-bottom: 32px;
  width: 400px;
  font-weight: bold;
  border: none;
  &:focus {
    outline: none;
  }
`;
const PTag = styled.p`
  color: gray;
  font-size: 16px;
  width: 400px;
  height: 40px;
  border: none;
  margin-bottom: 36px;
  padding-left: 16px;

  &:hover {
    border: 2px solid #c6c6c6;
    border-radius: 50px;
    outline: none;
  }
  &:focus {
    border: 2px solid #c6c6c6;
    border-radius: 50px;
    outline: none;
  }
`;
const BoldPTag = styled.p`
  color: #999999;
  font-size: 24px;
  font-weight: bold;
`;
const ModifyBtn = styled.button`
  position: relative;
  bottom: -20px;
  left: 610px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  background-color: white;
  width: 214px;
  height: 44px;
  box-shadow: 3px 3px 3px gray;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    transform: scale(1.3);
  }
`;
const Select = styled.select`
  width: 324px;
  height: 30px;
  margin-bottom: 36px;
  border: none;
  font-size: 20px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
  &:focus {
    font-weight: bold;
    outline: none;
  }
`;
const Option = styled.option``;

export const TextBox = () => {
  const { profileUrls } = useSelector((state) => ({
    profileUrls: state.user.profileUrl,
  }));
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        email: getEmail,
        name: getName,
        major: getMajor,
        classNumber: getClassNumber,
        profileUrl: getProfilUrl,
      } = getMyProfile.data;
      setName(getName);
      setEmail(getEmail);
      setClassNumber(getClassNumber);
      setMyMajor({ major: getMajor.major, majorCode: getMajor.majorCode });

      if (getProfilUrl === null) {
        try {
          await sendApi.putMyProfile({
            name: getName,
            profileUrl: DEFAULT_PROFILE,
            major: myMajor.majorCode,
            classNumber: getClassNumber,
          });
        } catch (error) {
          alert(error.response.data.message);
        }
      }
      dispatch(actions.changeUserInfo(getEmail, getName, getProfilUrl));
      dispatch(
        actions.changeUserDetailInfo(getMajor.majorCode, getClassNumber)
      );
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
        name,
        profileUrl: profileUrls,
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </PTag>
        <hr width="780px" align="left" color="#c6c6c6" />
        <BoldPTag>
          소속 동아리 :{' '}
          <BoldInput
            type="text"
            readOnly
            value={
              groupNameList.length === 0
                ? '아직 가입한 동아리가 없습니다.'
                : groupNameList
            }
          />
        </BoldPTag>
      </Field>
      <ModifyBtn onClick={handleClick}>수정</ModifyBtn>
    </Wrapper>
  );
};
