import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';

import sendApi from 'apis/sendApi';
import BoardContent from './BoardContent';
import BoardComment from './BoardComment';

const DetailWrapper = styled.div`
  width: 80%;
  margin-top: 88px;
  border-radius: 24px;
  box-shadow: 6px 8px 4px 0 rgba(0, 0, 0, 0.26);
  padding: 56px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 24px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Writer = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

const WriterGroupImg = styled.img`
  background-color: gray;
  width: 40px;
  height: 40px;
  border-radius: 24px;
`;

const CreatedDate = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: #606060;
`;

const BoardTitle = styled.div`
  margin: 16px 0 8px;
  font-size: 32px;
  font-weight: bold;
`;

const BoardDetail = ({ boardId }) => {
  const [boardDetailData, setBoardDetailData] = useState(null);

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getBoardDetail(boardId);
        setBoardDetailData(data.data);
        console.log('data: ', data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  console.log('boardDetailData: ', boardDetailData);

  if (boardDetailData) {
    return (
      <DetailWrapper>
        <Information>
          <Group>
            <WriterGroupImg
              src={boardDetailData.organization.profileUrl}
              alt={boardDetailData.organization.name}
            />
            <Writer>
              {boardDetailData.organization.name}({boardDetailData.creator.name}
              )
            </Writer>
          </Group>
          <CreatedDate>
            일정 시작 시간: {boardDetailData.board.startDateTime.split('T')[0]}
          </CreatedDate>
        </Information>
        <BoardTitle>{boardDetailData.board.title}</BoardTitle>
        <BoardContent
          BoardImg={boardDetailData.board.imageUrl}
          BoardLikeCount={boardDetailData.board.likesCount}
          BoardContent={boardDetailData.board.content}
          boardHashTags={boardDetailData.hashTags}
        />
        <BoardComment />
      </DetailWrapper>
    );
  }
  return <DetailWrapper>Loading Weather...</DetailWrapper>;
};

export default BoardDetail;
