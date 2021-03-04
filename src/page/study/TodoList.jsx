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

const Blank = styled.div`
  margin: auto;
`;

let Listid = 0;

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);

  const onInsert = (text) => {
    const todo = {
      id: Listid,
      text,
    };
    setTodolist(todolist.concat(todo));
    Listid += 1;
  };

  const onDelete = (id) => {
    const temp = todolist.filter((todo) => todo.id !== id);
    setTodolist(temp);
  };

  return (
    <TodoTemplate>
      <Title>TO DO LIST</Title>
      <AddTodo onInsert={onInsert} />
      {todolist[0] ? (
        <ListItems onDelete={onDelete} todolist={todolist} />
      ) : (
        <Blank>일정을 등록하세요</Blank>
      )}
    </TodoTemplate>
  );
};

export default TodoList;
