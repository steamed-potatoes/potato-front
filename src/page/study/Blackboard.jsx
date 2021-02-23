import React, { useState } from "react";
import styled from 'styled-components';
// import "./style.css"

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
      setValue(event.target.value);
  };
  return { value, onChange };
};

const Blackboard = () => {
  const name = useInput('');
  return (
    <Wrapper>
      <Ptag className="h1tag">디지털 칠판</Ptag>
      <Outputtag className="outputtag" value={name.value} />
      <Inputtag className="inputtag" placeholder="입력해주세요" {...name}  />
    </Wrapper>
  );
};

export default Blackboard;

const Wrapper = styled.div `
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
`;

const Ptag = styled.p`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  height: 160px;
  font-size: 80px;
  text-align: left;
  color: rgb(0, 0, 0);
  margin: 0px;
  white-space: pre-wrap;
  font-weight: normal;
`;

const Inputtag = styled.input`
  outline: none;
  border: 1px solid rgb(0, 0, 0);
  width: 1024px;
  padding: 8px;
  font-size: 16px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Outputtag = styled.input`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(30, 130, 76);
  color: rgb(255, 255, 255);
  text-align: center;
  font-size : 24px;
  width: 1024px;
  height: 400px;
`;