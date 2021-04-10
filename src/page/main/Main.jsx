import React from 'react';
import styled from 'styled-components';
import BoardCategory from './BoardCategory';
import NewBoardView from './NewBoardView';

const Main = () => {
  return (
    <Wrapper>
      <BoardCategory />
      <NewBoardView />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
