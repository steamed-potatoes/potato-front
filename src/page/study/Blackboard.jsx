import React, { useState } from 'react';
import styled from 'styled-components';

const Blackboard = () => {
  const [contents, setContents] = useState('');

const onChangeContents = (e) =>{
  setContents(e.target.value)
};

  return (
    <Board>
      <Title>디지털 칠판</Title>
      <Show>
        <Content>{contents}</Content>
      </Show>
      <InputBox
        type="text"
        placeholder="입력해주세요."
        onChange={onChangeContents}
      />
    </Board>
  );
};


const Board = styled.div`
  width : 100vw;
  display : flex;
  justify-content : center;
  flex-direction : column;
`;

const Title = styled.p`
  font-size : 85px;
  text-align:center;
`;

const Show = styled.div`
  background: green;
  width: 1024px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  font-size: 24px;
  color: white;

`;

const InputBox = styled.input`
  width: 1024px;
  height: 30px;
  margin: auto;
  margin-bottom : 50px;
  text-align:center;
`;

export default Blackboard;