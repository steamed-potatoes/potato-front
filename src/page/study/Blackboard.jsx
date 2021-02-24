import React, { useState } from 'react';
import styled from 'styled-components';

const Blackboard = () => {
  const [contents, setContents] = useState('');

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <Board>
      <Title>디지털 칠판</Title>
      <Show>
        <Content>{contents}</Content>
      </Show>
      <InputBox
        type="text"
        placeholder="입력해주세요"
        onChange={onChangeContents}
      />
    </Board>
  );
};

const Board = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 72px;
  font-weight: 600;
  margin: auto;
`;

const Show = styled.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(30, 130, 76);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 400px;
`;

const Content = styled.div`
  font-size: 24px;
  color: rgb(255, 255, 255);
  margin: 0px;
  white-space: pre-wrap;
`;

const InputBox = styled.input`
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
  height: 32px;
  text-align: center;
`;

export default Blackboard;
