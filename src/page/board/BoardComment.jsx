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

const NoneComment = styled.div`
  font-size: 18px;
  text-align: center;
`;

const BoardComment = ({ PresentBoardId }) => {
  const history = useHistory();
  const [commentContent, setCommentContent] = useState({
    content: '',
    parentCommentId: 0,
  });
  const [boardCommentList, setBoarCommentList] = useState([]);

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
        content: commentContent.content,
      });
      swal('댓글이 추가되었습니다');
      setCommentContent({
        content: '',
      });
      history.push(`/Board/${PresentBoardId}`);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  boardCommentList.map((Comment) => console.log('d', Comment));

  return (
    <Wrapper>
      <CommentCount>댓글 {boardCommentList.length}개</CommentCount>
      <MyComment
        commentContent={commentContent}
        setCommentContent={setCommentContent}
        addComment={addComment}
      />
      {boardCommentList.length ? (
        boardCommentList.map((Comment) => (
          <CommentView
            memberId={Comment.memberId}
            content={Comment.content}
            boardCommentLikeCounts={Comment.boardCommentLikeCounts}
            PresentBoardId={PresentBoardId}
            childrenData={Comment.children}
            key={Comment.id}
          />
        ))
      ) : (
        <NoneComment>등록된 코멘트가 없습니다.</NoneComment>
      )}
    </Wrapper>
  );
};

export default BoardComment;
