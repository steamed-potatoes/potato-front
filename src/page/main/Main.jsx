import React, { useState } from 'react';
import styled from 'styled-components';
import BoardCategory from './BoardCategory';
import BoardView from './BoardView';

const Main = () => {
  const [category, setCategory] = useState('전체보기');

  return (
    <Wrapper>
      <BoardCategory setCategory={setCategory} />
      <BoardView category={category} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
