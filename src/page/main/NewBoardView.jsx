import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import { BoardThumbnail } from 'components/BoardThumbnail';
import LinkButtonImg from '../../images/LinkButtonImg.png';
import { getMainPicture } from '../../utils/getMainPicture';

const NewBoardViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 192px;
`;

const NewBoardViewTitle = styled.div`
  text-align: center;
  margin: 0;
  font-size: 40px;
  font-weight: bold;
`;

const NewBoardItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LinkButton = styled.a`
  padding: 16px;
  margin: 24px 0;
  border-radius: 48px;

  background-image: url(${LinkButtonImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
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
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  return (
    <NewBoardViewWrapper>
      <NewBoardViewTitle>최근 게시글</NewBoardViewTitle>
      <LinkButton />
      <NewBoardItem>
        {newBoardData.length ? (
          newBoardData.map((board) => (
            <BoardThumbnail
              link={`/board/${board.boardId}`}
              boardImageUrl={getMainPicture(board.imageUrls)}
              boardTitle={board.boardTitle}
              orgName={board.orgName}
              key={board.boardId}
            />
          ))
        ) : (
          <ItemDetail />
        )}
      </NewBoardItem>
    </NewBoardViewWrapper>
  );
};

export default NewBoardView;
