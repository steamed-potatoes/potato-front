import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../libs/store/modules/board';

const BlackBoard = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.board);

  const onChangeBoard = (e) => {
    dispatch(actions.changeContent(e.target.value));
  };

  return (
    <Wrapper>
      <BoardTitle>디지털 칠판</BoardTitle>
      <DigitalBoard>
        <DigitalBoardContent>{content}</DigitalBoardContent>
      </DigitalBoard>
      <InputBox
        onChange={onChangeBoard}
        type="text"
        placeholder="입력 해주세요."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const BoardTitle = styled.p`
  font-size: 3em;
`;

const DigitalBoard = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(30, 130, 76);
  width: 70vw;
  height: 55vh;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const DigitalBoardContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  color: white;
  padding: 1rem;
  word-break: break-all;
  overflow: scroll;
`;

const InputBox = styled.input`
  border: 1px solid rgba(0, 0, 0, 1);
  width: 70vw;
  height: 5vh;
  text-align: center;
  outline: none;
  padding: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

export default BlackBoard;
