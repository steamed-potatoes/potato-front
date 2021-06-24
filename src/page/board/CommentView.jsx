import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import sendApi from 'apis/sendApi';
import swal from 'sweetalert';
import UnLikeLogo from '../../images/UnLikeLogo.png';
import LikeLogo from '../../images/LikeLogo.png';
import Recomment from './Recomment';
import MyComment from './MyComment';

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
  font-size: 16px;
`;

const CommentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
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

const AddReComment = styled.button`
  font-size: 12px;
  border-radius: 56px;
  font-weight: bold;

  background-color: #f0b138;
  color: white;
  width: 72px;
  height: 24px;
  border: none;
`;

const NoneRecomment = styled.div``;

const CommentView = ({
  author,
  content,
  boardCommentLikeCounts,
  PresentBoardId,
  parentId,
  isLike,
  childrenData,
  getCommentListFun,
}) => {
  const [addRecomentView, setAddRecommentView] = useState(0);
  const [recommentContent, setRecommentContent] = useState('');
  const [isLikeState, setIsLikeState] = useState(isLike);
  const [likeCountState, setLikeCountState] = useState(boardCommentLikeCounts);

  useEffect(() => {}, [isLikeState]);

  const addReComment = async () => {
    try {
      await sendApi.addComment({
        type: 'ORGANIZATION_BOARD',
        boardId: PresentBoardId,
        parentCommentId: parentId,
        content: recommentContent,
      });
      swal('댓글이 추가되었습니다');
      setRecommentContent('');
      setAddRecommentView(0);
      getCommentListFun();
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  const onClickCommentLike = async () => {
    try {
      await sendApi.commentLike({
        boardCommentId: parentId,
      });
      setLikeCountState(likeCountState + 1);
      setIsLikeState(true);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  const onClickCommentUnLike = async () => {
    try {
      await sendApi.commentUnLike(parentId);
      setLikeCountState(likeCountState - 1);
      setIsLikeState(false);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  return (
    <CommentViewWrap>
      <Comment>
        <WriterImg src={author.profileUrl} />
        <Summary>
          <WriterNickname>{author.name}</WriterNickname>
          <CommentContent>{content}</CommentContent>
          <CommentButtonWrap>
            {isLikeState ? (
              <CommentLikeSymbol onClick={onClickCommentUnLike} />
            ) : (
              <CommentUnLikeSymbol onClick={onClickCommentLike} />
            )}
            <CommentLikeCount>{likeCountState}</CommentLikeCount>
            <AddReComment
              key={parentId}
              onClick={() => {
                setAddRecommentView(!addRecomentView);
              }}
            >
              답글 작성
            </AddReComment>
          </CommentButtonWrap>
          {addRecomentView ? (
            <MyComment
              commentContent={recommentContent}
              setCommentContent={setRecommentContent}
              addComment={addReComment}
              key={parentId}
            />
          ) : (
            ''
          )}
          {childrenData.length ? (
            childrenData.map(
              ({ author, content, boardCommentLikeCounts, id, isLike }) => (
                <Recomment
                  recommentAuthor={author}
                  recommentContent={content}
                  recommentLike={boardCommentLikeCounts}
                  recommentId={id}
                  recommentIsLike={isLike}
                  key={id}
                />
              )
            )
          ) : (
            <NoneRecomment />
          )}
        </Summary>
      </Comment>
    </CommentViewWrap>
  );
};

export default CommentView;
