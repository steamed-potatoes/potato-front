import React from 'react';
import styled from 'styled-components';
import { BoardScreen, InputArea } from '../../components/Blackboard';

const Blackboard = () => {
  return (
    <Board>
      <Title>디지털 칠판</Title>
      <BoardScreen />
      <InputArea />
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

export default Blackboard;
