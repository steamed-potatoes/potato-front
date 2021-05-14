import React from 'react';
import styled from 'styled-components';
import { HeaderMenu } from 'components/header';
import BackgroundImg from '../../images/BackgroundImg.png';
import BoardDetail from './BoardDetail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${BackgroundImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 520px;
`;

const BoardMain = ({ match }) => {
  const { boardId } = match.params;
  return (
    <Wrapper>
      <HeaderMenu />
      <BoardDetail boardId={boardId} />
    </Wrapper>
  );
};

export default BoardMain;
