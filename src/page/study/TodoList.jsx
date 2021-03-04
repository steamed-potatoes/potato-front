import React, { useState } from 'react';
import styled from 'styled-components';
import { AddTodo, ListItems } from 'components/ToDoList';

const TodoTemplate = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 72px;
  font-weight: 600;
  margin: auto;
`;

let listId = 0;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const onInsert = (text) => {
    const todo = {
      id: listId,
      text,
    };
    setTodoList(todoList.concat(todo));
    listId += 1;
  };

  const onDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <Title>TO DO LIST</Title>
      <AddTodo onInsert={onInsert} />
      <ListItems onDelete={onDelete} todolist={todolist} />
    </TodoTemplate>
  );
};

export default TodoList;