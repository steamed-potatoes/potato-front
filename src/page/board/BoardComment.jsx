import React from 'react';
import styled from 'styled-components';
import UnLikeLogo from '../../images/UnLikeLogo.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Summary = styled.div`
  margin: 0 16px 8px;
  display: flex;
  flex-direction: column;
`;

const MyComment = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const AddComment = styled.button`
  font-size: 18px;
  font-weight: bold;
  border-radius: 56px;
  background-color: #f0b138;
  color: white;
  width: 96px;
  height: 40px;
  border: none;
`;

const AddCommentInputBox = styled.input`
  font-size: 18px;
  border-radius: 24px;
  margin: 8px 0;
  width: 88vh;
  height: 40px;
  border: solid #606060 1px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

const Recomment = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
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

const BoardComment = () => {
  return (
    <Wrapper>
      <CommentCount>댓글 24개</CommentCount>
      <MyComment>
        <WriterImg />
        <Summary>
          <WriterNickname>정윤미</WriterNickname>
          <AddCommentInputBox />
          <AddComment>댓글작성</AddComment>
        </Summary>
      </MyComment>

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
          <Recomment>
            <WriterImg />
            <Summary>
              <WriterNickname>정윤미2</WriterNickname>
              <CommentContent>종강을 원해</CommentContent>
              <CommentButtonWrap>
                <CommentLikeSymbol />
                <CommentLikeCount>12</CommentLikeCount>
              </CommentButtonWrap>
            </Summary>
          </Recomment>
        </Summary>
      </Comment>

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
          <Recomment>
            <WriterImg />
            <Summary>
              <WriterNickname>정윤미2</WriterNickname>
              <CommentContent>종강을 원해</CommentContent>
              <CommentButtonWrap>
                <CommentLikeSymbol />
                <CommentLikeCount>12</CommentLikeCount>
              </CommentButtonWrap>
            </Summary>
          </Recomment>
        </Summary>
      </Comment>
    </Wrapper>
  );
};

export default BoardComment;
