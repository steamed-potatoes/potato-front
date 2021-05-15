import React from 'react';
import styled from 'styled-components';
import UnLikeLogo from '../../images/UnLikeLogo.png';

const RecommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

const Summary = styled.div`
  margin: 0 16px 8px;
  display: flex;
  flex-direction: column;
`;

const WriterImg = styled.img`
  background-color: gray;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
`;

const WriterNickname = styled.div`
  font-size: 18px;
`;

const CommentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommentContent = styled.div`
  margin: 4px 0;
`;

const CommentLikeSymbol = styled.img`
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${UnLikeLogo});
  background-size: 100%;
`;

const CommentLikeCount = styled.div`
  color: #808080;
  margin: 0 8px;
`;

const ReComment = () => {
  return (
    <RecommentWrapper>
      <WriterImg />
      <Summary>
        <WriterNickname>정윤미2</WriterNickname>
        <CommentContent>종강을 원해</CommentContent>
        <CommentButtonWrap>
          <CommentLikeSymbol />
          <CommentLikeCount>12</CommentLikeCount>
        </CommentButtonWrap>
      </Summary>
    </RecommentWrapper>
  );
};

export default ReComment;
