import React, { useState } from 'react';
import styled from 'styled-components';
import { AddTodo, ListTemplate } from 'components/ToDoList';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [listId, setListId] = useState(0);

  const onInsert = (text) => {
    const todo = {
      id: listId,
      text,
    };
    setTodos(todos.concat(todo));
    setListId(listId + 1);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <Title>TO DO LIST</Title>
      <AddTodo onInsert={onInsert} />
      {todos.length ? (
        <ListTemplate onDelete={onDelete} todos={todos} />
      ) : (
        <Blank>일정을 등록하세요</Blank>
      )}
    </TodoTemplate>
  );
};

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

const Blank = styled.div`
  margin: auto;
`;

export default TodoList;
