import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';

import CommentView from './CommentView';
import MyComment from './MyComment';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCount = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BoardComment = ({ PresentBoardId }) => {
  const history = useHistory();
  const [commentContent, setCommentContent] = useState({
    content: '',
    parentCommentId: 1,
  });
  const [boarCommentList, setBoarCommentList] = useState({});

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getCommentList(PresentBoardId);
        setBoarCommentList(data.data);
        console.log('commentList 확인중: ', data.data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  const addComment = async () => {
    try {
      await sendApi.addComment({
        type: 'ORGANIZATION_BOARD',
        boardId: PresentBoardId,
        parentCommentId: commentContent.parentCommentId,
        content: commentContent.content,
      });
      swal('댓글이 추가되었습니다');
      setCommentContent({
        content: '',
        parentCommentId: 1,
      });
      history.push(`/Board/${PresentBoardId}`);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  return (
    <Wrapper>
      <CommentCount>댓글 {boarCommentList.length}개</CommentCount>
      <MyComment
        commentContent={commentContent}
        setCommentContent={setCommentContent}
        addComment={addComment}
      />
      <CommentView />
    </Wrapper>
  );
};

export default BoardComment;
