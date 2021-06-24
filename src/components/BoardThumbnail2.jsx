import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NewBoard = styled.div`
  background-color: #fefefe;
  margin: 10px;
  flex-basis: auto;
  flex-shrink: 2;
  flex-wrap: wrap-reverse;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 240px;
  height: 264px;
  border: none;
  border-radius: 32px;
  &:hover {
    border: none;
    outline: none;
    box-shadow: 8px 12px 4px 0 rgba(0, 0, 0, 0.24),
      0 0 1px 0 rgba(0, 0, 0, 0.19);
  }
`;

const BoardThumb = styled.img`
  border-radius: 32px 32px 0 0;
  width: 240px;
  height: 200px;
  object-fit: cover;
`;

const BoardSummary = styled.div`
  border-radius: 0 0 32px 32px;
  background-color: #ededed;
  text-align: center;
  width: 240px;
  height: 64px;
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin: 4px 0 0 0;
`;
const BoardWriter = styled.div`
  font-size: 16px;
  color: #2c2c2c;
  text-align: center;
`;


export const BoardThumbnail2 = ({ boardImageUrl, boardTitle, orgName, boardId }) => {
  const history = useHistory();

  return (
    <NewBoard onClick={() => {
      let url = '/Board/'
      url += boardId;
      history.push({
        pathname: url,
      })
    }}
    >
      <BoardThumb src={boardImageUrl} alt={boardTitle} />
      <BoardSummary>
        <BoardTitle>{boardTitle}</BoardTitle>
        <BoardWriter>{orgName}</BoardWriter>
      </BoardSummary>
    </NewBoard>
  );
};
