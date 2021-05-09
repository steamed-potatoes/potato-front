import React, { useState } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import { useEffect } from 'react/cjs/react.development';
import { BoardThumbnail } from 'components/BoardThumbnail';

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
  const [newBoardData, setNewBoardData] = useState([]);

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.newBoardData();
        setNewBoardData(data.data);
      } catch (e) {
        swal(`${e.reponse.data.message}`);
      }
    };
    receivedData();
  }, []);

  return (
    <NewBoardViewWrapper>
      <NewBoardViewTitle>최근 게시글</NewBoardViewTitle>
      <NewBoardItem>
        {newBoardData.length ? (
          newBoardData.map((data) => (
            <BoardThumbnail itemData={data} key={data.boardId} />
          ))
        ) : (
          <ItemDetail />
        )}
      </NewBoardItem>
    </NewBoardViewWrapper>
  );
};

export default NewBoardView;
