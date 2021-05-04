import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { useHistory } from 'react-router-dom';
import localStorageService from 'libs/localStorageService';

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

const SelectSet = styled.div`
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

const InputList = styled.div`
  align-items: left;

  margin: 16px;
`;

const Input = styled.input`
  width: 400px;
  border: none;
  border-bottom: solid 2px #CFCECE;
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
  const [inputs,setInputs] = useState({
    selectedMajor: 'ICT융합과',
    classNumber: 0
  });
  const { email, name, profileUrl} = useSelector(state => ({
    email: state.user.email,
    name: state.user.name,
    profileUrl: state.user.profileUrl
  }));

  const history = useHistory();

  useEffect(() => {
  const getMajors = async () => {
    try {
      const { data } = await sendApi.getMajors();
      setMajor(data);
    } catch (e) {
      alert(e.response.data.message);
    }
  }
  
  getMajors();
}, []);

const signUpMember = async () => {
  try {
    const ans = {
      "email": email,
      "name": name,
      "profileUrl": profileUrl,
      "major": inputs.selectedMajor,
      "classNumber": inputs.classNumber
    };

    const { data } = await sendApi.signUpMember(ans);
    
    localStorageService.set('authToken', data);
    history.push('/Main');
  } catch(error){
    alert(error);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  signUpMember();
};

const handleChange = (e) => {
  const { value, name } = e.target; 
  setInputs({
    ...inputs, 
    [name]: Number(value)
  });
};

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Title>Sign up</Title>
      <InputList>
        {/* <InputSet>
          <InputName>닉네임</InputName>
          <Input name="nickname" onChange={handleChange} />
        </InputSet> */}
        <SelectSet>
          <InputName>학과</InputName>
          <Select name="selectedMajor" onChange={handleChange}>
            {major.map((data) => (
              <Option key={data.major}>{data.major}</Option>
            ))}
          </Select>
        </SelectSet>
        <InputSet>
          <InputName>학번</InputName>
          <Input name="classNumber" onChange={handleChange} />
        </InputSet>
      </InputList>
      <Button type="submit">START</Button>
    </InputWrapper>
  );
};

export default SignUpBody;
