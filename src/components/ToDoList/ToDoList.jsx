import React from 'react';
import styled from 'styled-components';
import {ToDo} from './ToDo';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToDoList = ({toDoList, handleDelete}) => {
  return (
    <List>
      {toDoList.map((todo) => (
        <ToDo key={todo.key} todo={todo} handleDelete={handleDelete} />
      ))}
    </List>
  );
};

