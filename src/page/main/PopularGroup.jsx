import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { BoardThumbnail } from 'components/BoardThumbnail';
import LinkButtonImg from 'images/LinkButtonImg.png';
// import LeftIcon from 'images/LeftIcon.png';
// import RightIcon from 'images/RightIcon.png';
import sendApi from 'apis/sendApi';

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

const PopularGroup = () => {
  const [popularBoards, setPopularBoards] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    const { data } = await sendApi.retrievePopluarBoards(5);
    setPopularBoards(data.data);
  }, []);

  return (
    <Wrapper>
      <Title>인기있는 그룹</Title>
      <SubTitle>현재 슬기로운 감자 생활에서 핫한 그룹들을 보고 가세요</SubTitle>
      <LinkButton onClick={() => history.push('/search')} />
      <ContentWreapper>
        {popularBoards.map((board) => (
          <BoardThumbnail
            key={board.id}
            boardImageUrl={board.profileUrl}
            boardTitle={board.name}
            orgName={board.description}
            subDomain={board.subDomain}
          />
        ))}
      </ContentWreapper>
    </Wrapper>
  );
};

export default PopularGroup;
