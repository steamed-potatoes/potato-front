import React from 'react';
import styled from 'styled-components';
import {ToDo} from './ToDo';

const List = styled.div``;

export const ToDoList = ({todoList, onDeleteTodo}) => { 
    return (
      <List>
        {todoList.map((todo) => (
          <ToDo key={todo.data.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </List>
    );
};