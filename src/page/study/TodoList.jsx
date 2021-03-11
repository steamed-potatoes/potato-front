import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoInsert, TodoShow } from 'components/ToDoList';

const TodoWrap = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
`
const Title = styled.p`
  font-size: 40px;
  margin: auto;
`

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const onInsert = (text) => {
    setTodoList(todoList.concat({id:todoId, text}));
    setTodoId(todoId + 1);
  }

  const onDelete = (id) => {
    setTodoList(todoList.filter((todo)=>todo.id !==id));
  }

  return(
    <TodoWrap>
      <Title>TodoList</Title>
      <TodoInsert onInsert={onInsert} />
      <TodoShow todoList={todoList} onDelete={onDelete} />
    </TodoWrap>
  )
}

export default TodoList;