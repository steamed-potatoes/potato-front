import React from 'react';
import styled from 'styled-components';
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

const BoardDetail = () => {
  return (
    <DetailWrapper>
      <Information>
        <Group>
          <WriterGroupImg />
          <Writer>찐감자(정윤미)</Writer>
        </Group>
        <CreatedDate>게시물 작성 시간: 2021.05.14</CreatedDate>
      </Information>
      <BoardTitle>오늘은 휴강입니다</BoardTitle>
      <BoardContent />
      <BoardComment />
    </DetailWrapper>
  );
};

export default BoardDetail;
