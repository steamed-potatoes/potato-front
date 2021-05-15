import React from 'react';
import styled from 'styled-components';
import LikeLogo from '../../images/LikeLogo.png';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8px 0 16px;
  padding: 32px 0 32px;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
`;

const ContentTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ContentImg = styled.img`
  width: 496px;
  height: 496px;
  background-color: gray;
`;

const Summary = styled.div`
  margin: 0 0 0 24px;
  width: 40%;
`;

const BoardLike = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const LikeSymbol = styled.img`
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${LikeLogo});
  background-size: 100%;
`;

const LikeCount = styled.div`
  margin-left: 8px;
`;

const BoardHashtags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const HashTag = styled.div`
  padding: 8px;
  border-radius: 16px;
  border: solid #f0b138 1px;
  text-align: center;
  margin: 8px;
`;

const NoneHashTag = styled.div``;

const ContentDetail = styled.div`
  margin-top: 32px;
`;

const BoardContent = ({
  BoardImg,
  BoardLikeCount,
  BoardContent,
  BoardHashTags,
}) => {
  return (
    <ContentWrapper>
      <ContentTop>
        <ContentImg src={BoardImg} />
        <Summary>
          <BoardLike>
            <LikeSymbol />
            <LikeCount>좋아요 {BoardLikeCount}개</LikeCount>
          </BoardLike>
          <BoardHashtags>
            {BoardHashTags ? (
              BoardHashTags.map((data) => <HashTag>{data}</HashTag>)
            ) : (
              <NoneHashTag />
            )}
          </BoardHashtags>
        </Summary>
      </ContentTop>
      <ContentDetail>{BoardContent}</ContentDetail>
    </ContentWrapper>
  );
};

export default BoardContent;
