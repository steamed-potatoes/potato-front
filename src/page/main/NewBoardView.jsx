import React from 'react';
import styled from 'styled-components';

const NewBoardViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const NewBoardViewTitle = styled.div`
  width: 60%;
  margin: 8px 0 8px 16px;
  font-size: 24px;
  font-weight: bold;
`;

const NewBoardItem = styled.div`
  width: 60%;
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

const NewBoardView = () => {
  return (
    <NewBoardViewWrapper>
      <NewBoardViewTitle>최근 게시글</NewBoardViewTitle>
      <NewBoardItem>
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
        <ItemDetail />
      </NewBoardItem>
    </NewBoardViewWrapper>
  );
};

export default NewBoardView;
