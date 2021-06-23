import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BoardThumbnail } from 'components/BoardThumbnail';
import LinkButtonImg from 'images/LinkButtonImg.png';
import sendApi from 'apis/sendApi';
import moment from 'moment';
import { getMainPicture } from '../../utils/getMainPicture';
// import LeftIcon from 'images/LeftIcon.png';
// import RightIcon from 'images/RightIcon.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 192px;
`;

const Title = styled.p`
  font-size: 40px;
  margin: 0 8px 16px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  line-height: 8px;
  font-size: 16px;
  margin: 8px 8px 0;
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

const ContentWreapper = styled.div`
  display: flex;
`;

// const LeftButton = styled.button`
//   position: relative;
//   top: 100px;
//   color: gray;
//   border-radius: 0 24px 24px 0;
//   border: none;
//   width: 40px;
//   height: 40px;

//   background-image: url(${LeftIcon});
//   background-position: 35% 50%;
//   background-repeat: no-repeat;
//   background-size: 16px;
// `;

// const RightButton = styled.button`
//   position: relative;
//   top: 100px;
//   float: right;

//   color: gray;
//   border-radius: 24px 0 0 24px;
//   border: none;
//   width: 40px;
//   height: 40px;

//   background-image: url(${RightIcon});
//   background-position: 65% 50%;
//   background-repeat: no-repeat;
//   background-size: 16px;
// `;

const Intermissionless = () => {
  const [boards, setBoards] = useState([]);
  useEffect(async () => {
    const now = moment().format('YYYY-MM-DDTHH:mm:ss');
    const { data } = await sendApi.retrieveIntermissionlessBoards(4, now);
    setBoards(data.data);
  }, []);

  return (
    <Wrapper>
      <Title>마감이 얼마 남지 않은 일정</Title>
      <SubTitle>마감이 얼마 남지 않았어요</SubTitle>
      <LinkButton />
      <ContentWreapper>
        {boards.map((board) => (
          <BoardThumbnail
            link={`/board/${board.id}`}
            key={board.id}
            boardImageUrl={getMainPicture(board.imageUrlList)}
            boardTitle={board.title}
            orgName={`${board.endDateTime} 까지`}
          />
        ))}
      </ContentWreapper>
    </Wrapper>
  );
};

export default Intermissionless;
