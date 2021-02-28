import React, { useState } from 'react';
import styled from 'styled-components';
import { AddTodo, TodoItems } from 'components/todo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: 40px 0;
`;

const Title = styled.p`
  font-size: 48px;
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Wrapper>
      <Title>투두리스트</Title>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoItems todos={todos} setTodos={setTodos} />
    </Wrapper>
  );
};

export default TodoList;
