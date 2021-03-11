import React from 'react';
import styled from 'styled-components';
import { TodoItems } from './TodoItems';

const TodoShowWrap = styled.div``;

export const TodoShow = ({todoList, onDelete}) => {
  return(
    <TodoShowWrap>
      {todoList.map((todo) => (
        <TodoItems key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </TodoShowWrap>
  )
}