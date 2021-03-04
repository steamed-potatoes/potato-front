import React from 'react';
import styled from 'styled-components';
import { DeleteTodo } from './DeleteTodo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 1);
  width: 80%;
  margin-top: 40px;
`;

const TodoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #ffff7e;
  border: 1px solid black;
  border-top: 0;
`;

const TodoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 32px;
`;

export const TodoItem = ({ todo, onClickDeleteButton }) => {
  return (
    <Wrapper>
      <TodoTitle>
        <DeleteTodo onClickDeleteButton={onClickDeleteButton} />
      </TodoTitle>
      <TodoContent>{todo.content}</TodoContent>
    </Wrapper>
  );
};
