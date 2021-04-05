import React from 'react';
import styled from 'styled-components';

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
  return (
    <InputSet>
      <InputName>{name}</InputName>
      <Input />
    </InputSet>
  );
}

export default SignUpBodyInputSet; 