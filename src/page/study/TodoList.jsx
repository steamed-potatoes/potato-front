import React, { useState } from 'react';
import styled from 'styled-components';
import { AddTodo, ListTemplate } from 'components/ToDoList';
import swal from 'sweetalert';
import sendApi from 'api/sendApi';
import { useEffect } from 'react/cjs/react.development';

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

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.todoList();
        setTodos(data);
      } catch (e) {
        swal(`${e}`);
      }
    };
    receivedData();
  }, []);

  const onInsert = async (title) => {
    try {
      const { data } = await sendApi.todoAdd({
        title,
        Headers: { 'Content-Type': 'application/json' },
      });
      setTodos(todos.concat(data));
    } catch (e) {
      swal(`${e}`);
    }
  };

  const onDelete = (id) => {
    sendApi.todoDel(id);
    setTodos(todos.filter((todo) => todo.data.id !== id));
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

export default TodoList;
