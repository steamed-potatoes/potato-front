import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import swal from 'sweetalert';
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

const ReComment = ({ RecommentMemberId, RecommentContent, RecommentLike }) => {
  const [memberInfomation, setMemberInformation] = useState({});
  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getUserProfile(RecommentMemberId);
        setMemberInformation(data.data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);
  return (
    <RecommentWrapper>
      <WriterImg src={memberInfomation.profileUrl} />
      <Summary>
        <WriterNickname>{memberInfomation.name}</WriterNickname>
        <CommentContent>{RecommentContent}</CommentContent>
        <CommentButtonWrap>
          <CommentLikeSymbol />
          <CommentLikeCount>{RecommentLike}</CommentLikeCount>
        </CommentButtonWrap>
      </Summary>
    </RecommentWrapper>
  );
};

export default ReComment;
