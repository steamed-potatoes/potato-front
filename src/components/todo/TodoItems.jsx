import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoItems = ({ todos, onClickDeleteButton }) => {
  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onClickDeleteButton={() => onClickDeleteButton(todo.id)}
    />
  ));
};
