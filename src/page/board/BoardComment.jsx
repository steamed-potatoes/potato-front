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
  const [commentContent, setCommentContent] = useState('');
  const [commentCount, setCommentCount] = useState(0);
  const [boardCommentList, setBoarCommentList] = useState([]);

  const commentListCount = (dataList) => {
    let count = 0;
    dataList.forEach((comment) => {
      if (comment.children.length) {
        count += comment.children.length;
      }
    });
    count += dataList.length;
    setCommentCount(count);
  };

  const receivedData = async () => {
    try {
      const { data } = await sendApi.getCommentList(PresentBoardId);
      setBoarCommentList(data.data);
      await commentListCount(data.data);
    } catch (e) {
      swal(`${e.response.data.message}`);
    }
  };

  useEffect(() => {
    receivedData();
  }, []);

  const addComment = async () => {
    try {
      await sendApi.addComment({
        type: 'ORGANIZATION_BOARD',
        boardId: PresentBoardId,
        content: commentContent,
      });
      swal('댓글이 추가되었습니다');
      setCommentContent('');
      history.go(0);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  return (
    <Wrapper>
      <CommentCount>댓글 {commentCount}개</CommentCount>
      <MyComment
        commentContent={commentContent}
        setCommentContent={setCommentContent}
        addComment={addComment}
      />
      {boardCommentList.length ? (
        boardCommentList.map((comment) => (
          <CommentView
            memberId={comment.memberId}
            content={comment.content}
            boardCommentLikeCounts={comment.boardCommentLikeCounts}
            PresentBoardId={PresentBoardId}
            parentId={comment.id}
            childrenData={comment.children}
            key={comment.id}
          />
        ))
      ) : (
        <NoneComment>등록된 코멘트가 없습니다.</NoneComment>
      )}
    </Wrapper>
  );
};

export default BoardComment;
