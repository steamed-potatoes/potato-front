import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import sendApi from 'apis/sendApi';
import swal from 'sweetalert';
import UnLikeLogo from '../../images/UnLikeLogo.png';
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
  font-size: 18px;
`;

const CommentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
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

const CommentView = ({
  memberId,
  content,
  boardCommentLikeCounts,
  PresentBoardId,
  parentId,
  childrenData,
}) => {
  const history = useHistory();
  console.log('현재 코멘트 아이디:', parentId);
  const [addRecomentView, setAddRecommentView] = useState(1);
  const [recommentContent, setRecommentContent] = useState('');

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
      console.log('recomment 추가 데이터', parentId, recommentContent.content);
      setAddRecommentView(0);
      history.push(`/Board/${PresentBoardId}`);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  const onClickAddRecomment = () => {
    console.log('fjkdf');

    setAddRecommentView(!addRecomentView);
  };

  console.log(
    'Comment',
    memberId,
    content,
    boardCommentLikeCounts,
    childrenData
  );

  return (
    <CommentViewWrap>
      <Comment>
        <WriterImg />
        <Summary>
          <WriterNickname>{memberId}</WriterNickname>
          <CommentContent>{content}</CommentContent>
          <CommentButtonWrap>
            <CommentLikeSymbol />
            <CommentLikeCount>{boardCommentLikeCounts}</CommentLikeCount>
            <AddReComment
              onClick={() => {
                onClickAddRecomment;
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
            <Recomment RecommentData={childrenData} key={childrenData.id} />
          ) : (
            ''
          )}
        </Summary>
      </Comment>
    </CommentViewWrap>
  );
};

export default CommentView;
