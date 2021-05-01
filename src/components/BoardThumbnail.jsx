import React from 'react';
import styled from 'styled-components';

const NewBoard = styled.div`
  margin: 10px;
  flex-basis: auto;
  flex-shrink: 2;
  flex-wrap: wrap-reverse;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 200px;
  height: 232px;
  border: solid black 1px;
  &:hover {
    border: none;
    outline: none;
    box-shadow: 8px 12px 4px 0 rgba(0, 0, 0, 0.24),
      0 0 1px 0 rgba(0, 0, 0, 0.19);
  }
`;

const BoardThumb = styled.img`
  width: 200px;
  height: 184px;
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const BoardWriter = styled.div`
  font-size: 16px;
  color: #2c2c2c;
  text-align: center;
`;

export const BoardThumbnail = (itemData) => {
  return (
    <NewBoard>
      <BoardThumb
        src={itemData.itemData.imageUrl}
        alt={itemData.itemData.title}
      />
      <BoardTitle>{itemData.itemData.title}</BoardTitle>
      <BoardWriter>{itemData.itemData.subDomain}</BoardWriter>
    </NewBoard>
  );
};
