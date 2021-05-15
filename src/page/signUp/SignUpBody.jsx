import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { useHistory } from 'react-router-dom';
import localStorageService from 'libs/localStorageService';
import * as actions from 'store/modules/user';
import { SESSION_ID } from 'constant';

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1280px;
  height: 696px;
  margin: 88px auto 0px auto;
  padding: 0px;

  border: 0px solid #ffffff;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: 9px 9px 7px rgb(0, 0, 0, 0.3);
`;

const Title = styled.p`
  margin: 0px 0px 80px 0px;

  font-size: 56px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 540px;
  height: 80px;
  margin: 40px auto 0px auto;
  padding: 16px 0px;

  color: #ffffff;
  border: none;
  border-radius: 48px;
  background-color: #f0b138;

  font-size: 24px;

  &:hover {
    cursor: pointer;
    border: 3px solid #f0b138;
    background-color: #ffffff;
    color: #000000;
  }
  &:focus {
    outline: none;
  }
`;

const InputSet = styled.div`
  margin: 40px;
`;

const SelectSet = styled.div`
  margin: 40px;
`;

const InputName = styled.p`
  font-size: 12px;
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

const InputList = styled.div`
  align-items: left;

  margin: 0px;
`;

const Input = styled.input`
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

const SignUpBody = () => {
  const [major, setMajor] = useState([]);
  const [inputs, setInputs] = useState({
    nickname: '',
    selectedMajor: 'IT_ICT',
    classNumber: 0,
  });
  const { email, name, profileUrl } = useSelector((state) => ({
    email: state.user.email,
    name: state.user.name,
    profileUrl: state.user.profileUrl,
  }));

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (email === '') {
      history.push('/');
    }

    const getMajors = async () => {
      try {
        const { data } = await sendApi.getMajors();
        setMajor(data.data);
      } catch (e) {
        alert(e.response.data.message);
      }
    };

    getMajors();
  }, []);

  const signUpMember = async () => {
    try {
      const ans = {
        email,
        name,
        profileUrl,
        major: inputs.selectedMajor,
        classNumber: inputs.classNumber,
      };
      const { data } = await sendApi.signUpMember(ans);

      localStorageService.set(SESSION_ID, data.data);
      history.push('/Main');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpMember();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'classNumber') {
      setInputs({
        ...inputs,
        [name]: Number(value),
      });
    } else if (name === 'nickname') {
      setInputs({
        ...inputs,
        [name]: value,
      });

      dispatch(actions.changeUserInfo(email, value, profileUrl));
    } else if (name === 'selectedMajor') {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Title>Sign up</Title>
      <InputList>
        <InputSet>
          <InputName>닉네임</InputName>
          <Input
            name="nickname"
            value={inputs.nickname}
            onChange={handleChange}
          />
        </InputSet>
        <SelectSet>
          <InputName>학과</InputName>
          <Select
            name="selectedMajor"
            value={inputs.selectedMajor}
            onChange={handleChange}
          >
            {major.map((data) => (
              <Option key={data.majorCode} value={data.majorCode}>
                {data.department} - {data.major}
              </Option>
            ))}
          </Select>
        </SelectSet>
        <InputSet>
          <InputName>학번</InputName>
          <Input
            name="classNumber"
            value={inputs.classNumber}
            onChange={handleChange}
          />
        </InputSet>
      </InputList>
      <Button type="submit">로그인</Button>
    </InputWrapper>
  );
};

export default SignUpBody;
