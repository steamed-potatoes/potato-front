import React from 'react';
import styled from 'styled-components';
import UnLikeLogo from '../../images/UnLikeLogo.png';
import Recomment from './Recomment';

const CommentViewWrap = styled.div``;

const Summary = styled.div`
  margin: 0 16px 8px;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
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

const AddReComment = styled.button`
  font-size: 12px;
  border-radius: 56px;
  background-color: #f0b138;
  color: white;
  width: 72px;
  height: 24px;
  border: none;
`;

const CommentView = () => {
  return (
    <CommentViewWrap>
      <Comment>
        <WriterImg />
        <Summary>
          <WriterNickname>정윤미2</WriterNickname>
          <CommentContent>종강을 원해</CommentContent>
          <CommentButtonWrap>
            <CommentLikeSymbol />
            <CommentLikeCount>32</CommentLikeCount>
            <AddReComment>답글 작성</AddReComment>
          </CommentButtonWrap>
          <Recomment />
        </Summary>
      </Comment>
    </CommentViewWrap>
  );
};

export default CommentView;
