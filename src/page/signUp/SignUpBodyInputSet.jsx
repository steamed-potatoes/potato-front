import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';

const InputSet = styled.div`
  margin: 40px;
`;

const InputName = styled.p`
  font-size: 12px;
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

const SignUpBodyInputSet = ({name}) => {
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

  return (
    <InputSet>
      <InputName>{name}</InputName>
      <Input placeholder={major} />
    </InputSet>
  );
}

export default SignUpBodyInputSet; 