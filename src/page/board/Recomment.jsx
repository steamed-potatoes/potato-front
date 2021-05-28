import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import swal from 'sweetalert';
import UnLikeLogo from '../../images/UnLikeLogo.png';
import LikeLogo from '../../images/LikeLogo.png';

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
  font-size: 16px;
`;

const CommentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommentContent = styled.div`
  font-size: 16px;
  margin: 0 0 4px;
`;

const CommentLikeSymbol = styled.img`
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${LikeLogo});
  background-size: 100%;
`;

const CommentUnLikeSymbol = styled.img`
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

const ReComment = ({
  recommentMemberId,
  recommentContent,
  recommentLike,
  recommentIsLike,
  recommentId,
}) => {
  const [memberInfomation, setMemberInformation] = useState({});
  const [recommentLikeState, setRecommentLikeState] = useState(recommentIsLike);
  const [recommentLikeCount, setRecommentLikeCount] = useState(recommentLike);

  const receivedData = async () => {
    try {
      const { data } = await sendApi.getUserProfile(recommentMemberId);
      setMemberInformation(data.data);
    } catch (e) {
      swal(`${e.response.data.message}`);
    }
  };

  useEffect(() => {
    receivedData();
  }, [recommentLikeState]);

  const onClickCommentLike = async () => {
    try {
      await sendApi.commentLike({
        boardCommentId: recommentId,
      });
      setRecommentLikeCount(recommentLikeState + 1);
      setRecommentLikeState(true);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  const onClickCommentUnLike = async () => {
    try {
      await sendApi.commentUnLike(recommentId);
      setRecommentLikeCount(recommentLikeState - 1);
      setRecommentLikeState(false);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  return (
    <RecommentWrapper>
      <WriterImg src={memberInfomation.profileUrl} />
      <Summary>
        <WriterNickname>{memberInfomation.name}</WriterNickname>
        <CommentContent>{recommentContent}</CommentContent>
        <CommentButtonWrap>
          {recommentLikeState ? (
            <CommentLikeSymbol onClick={onClickCommentUnLike} />
          ) : (
            <CommentUnLikeSymbol onClick={onClickCommentLike} />
          )}
          <CommentLikeCount>{recommentLikeCount}</CommentLikeCount>
        </CommentButtonWrap>
      </Summary>
    </RecommentWrapper>
  );
};

export default ReComment;
