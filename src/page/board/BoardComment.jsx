import React, { useState, useEffect } from 'react';

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
  const [commentContent, setCommentContent] = useState('');
  const [commentCount, setCommentCount] = useState(0);
  const [boardCommentList, setBoarCommentList] = useState([]);

  const commentListCount = (dataList) => {
    setCommentCount(
      dataList.reduce((accumulator, comment) => {
        return comment.children.length
          ? accumulator + comment.children.length
          : accumulator;
      }, dataList.length)
    );
  };

  const getCommentList = async () => {
    try {
      const { data } = await sendApi.getCommentList(PresentBoardId);
      setBoarCommentList(data.data);
      await commentListCount(data.data);
    } catch (e) {
      swal(`${e.response.data.message}`);
    }
  };

  useEffect(() => {
    getCommentList();
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
      getCommentList();
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
            author={comment.author}
            content={comment.content}
            boardCommentLikeCounts={comment.boardCommentLikeCounts}
            PresentBoardId={PresentBoardId}
            parentId={comment.id}
            isLike={comment.isLike}
            childrenData={comment.children}
            getCommentListFun={getCommentList}
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
