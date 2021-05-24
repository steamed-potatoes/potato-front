import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';

const MyCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const WriterImg = styled.img`
  background-color: gray;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
`;

const Summary = styled.div`
  margin: 0 16px 8px;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
`;

const AddCommentButton = styled.button`
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
  width: 120vh;
  height: 40px;
  border: solid #606060 1px;
`;

const WriterNickname = styled.div`
  font-size: 18px;
`;

const MyComment = ({ addComment, commentContent, setCommentContent }) => {
  const [userInfomation, setUserInfomation] = useState(null);

  const receivedData = async () => {
    try {
      const { data } = await sendApi.getMyProfile();
      setUserInfomation(data.data);
    } catch (e) {
      swal(`${e.response.data.message}`);
    }
  };

  useEffect(() => {
    receivedData();
    setCommentContent('');
  }, []);

  const onChangeContent = (e) => {
    setCommentContent(e.target.value);
  };

  if (!userInfomation) {
    return (
      <MyCommentWrapper>
        <WriterImg />
        <Summary>
          <WriterNickname>로딩중</WriterNickname>
          <AddCommentInputBox
            name="content"
            value={commentContent}
            onChange={onChangeContent}
          />
          <AddCommentButton onClick={() => addComment()}>
            댓글작성
          </AddCommentButton>
        </Summary>
      </MyCommentWrapper>
    );
  }
  return (
    <MyCommentWrapper>
      <WriterImg src={userInfomation.profileUrl} />
      <Summary>
        <WriterNickname>{userInfomation.name}</WriterNickname>
        <AddCommentInputBox name="content" onChange={onChangeContent} />
        <AddCommentButton onClick={() => addComment()}>
          댓글작성
        </AddCommentButton>
      </Summary>
    </MyCommentWrapper>
  );
};

export default MyComment;
