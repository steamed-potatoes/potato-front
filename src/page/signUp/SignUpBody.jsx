import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
// import SignUpBodyList from './SignUpBodyList';

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 480px;
  height: 560px;
  margin: 40px auto;
  padding: 40px 24px 40px 24px;

  border: 0px solid #ffffff;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: -8px 16px 4px rgb(128, 128, 128, 0.6);
`;

const Title = styled.p`
  margin: 40px;

  font-size: 56px;
`;

const Button = styled.button`
  width: 400px;
  margin: 48px auto;
  padding: 16px 0px;

  color: #ffffff;
  border: none;
  border-radius: 48px;
  background-color: #f0b138;

  font-size: 24px;

  &:hover {
    cursor: pointer;
    border: 1px solid #cfcece;
  }
  &:focus {
    outline: none;
  }
`;

const InputSet = styled.div`
  margin: 40px;
`;

const InputName = styled.p`
  font-size: 12px;
`;

const Select = styled.select`
  width: 400px;

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

const SignUpBody = () => {
  const [major, setMajor] = useState([]);

  useEffect(() => {
  const getMajor = async () => {
    try {
      const { data } = await sendApi.signUpMajor();
      setMajor(data);
      // console.log(data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  
  getMajor();
}, []);

const handleSubmit = (event) => {
  event.preventDefault();
  alert({})
};

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Title>Sign up</Title>
      <InputSet>
        <InputName>학과</InputName>
        <Select>
          {major.map((data) => (
            <Option key={data.major}>{data.major}</Option>
          ))}
        </Select>
      </InputSet>
      <Button type="submit">START</Button>
    </InputWrapper>
  );
};

export default SignUpBody;
