import React, { useState, useEffect } from 'react';
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

const NoneRecomment = styled.div``;

const CommentView = ({
  memberId,
  content,
  boardCommentLikeCounts,
  PresentBoardId,
  parentId,
  childrenData,
}) => {
  const history = useHistory();
  const [addRecomentView, setAddRecommentView] = useState(0);
  const [recommentContent, setRecommentContent] = useState('');
  const [memberInfomation, setMemberInformation] = useState({});

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getUserProfile(memberId);
        setMemberInformation(data.data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  const addReComment = async () => {
    console.log(
      '왜 대댓글 안돼ㅜㅜ\nboardId: ',
      PresentBoardId,
      'parentCommentId: ',
      parentId,
      'content: ',
      recommentContent
    );
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
      history.push(`/Board/${PresentBoardId}`);
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  const onClickAddRecomment = () => {
    setAddRecommentView(!addRecomentView);
  };

  return (
    <CommentViewWrap>
      <Comment>
        <WriterImg src={memberInfomation.profileUrl} />
        <Summary>
          <WriterNickname>{memberInfomation.name}</WriterNickname>
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
            childrenData.map((data) => (
              <Recomment
                RecommentMemberId={data.memberId}
                RecommentContent={data.content}
                RecommentLike={data.boardCommentLikeCounts}
                key={data.id}
              />
            ))
          ) : (
            <NoneRecomment />
          )}
        </Summary>
      </Comment>
    </CommentViewWrap>
  );
};

export default CommentView;
