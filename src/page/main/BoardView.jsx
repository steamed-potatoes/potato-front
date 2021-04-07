import React from 'react';
import styled from 'styled-components';

const BoardViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BoardViewTitle = styled.div`
  width: 70%;
  margin: 8px 0 8px 16px;
  font-size: 24px;
  font-weight: bold;
`;

const BoardItem = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ItemDetail = styled.div`
  margin: 10px;
  flex-basis: auto;
  flex-shrink: 2;
  width: 200px;
  height: 232px;
  background-color: gray;
`;

const BoardView = ({ category }) => {
  return (
    <BoardViewWrapper>
      <BoardViewTitle>{category}</BoardViewTitle>
      <BoardItem>
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
      </BoardItem>
    </BoardViewWrapper>
  );
};

export default BoardView;
