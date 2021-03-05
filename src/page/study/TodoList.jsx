import React, { useState } from 'react';
import styled from 'styled-components';
import {ToDoForm,ToDoList} from 'components/ToDoList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  font-size : 80px;
  margin: 100px;
`;

function TodoList() {
  
  const [ toDoList, setToDoList ] = useState([]);

  const handleDelete = (id) => {
    setToDoList(toDoList.filter((todo)=> todo.id !== id));
  };

  const addTask = (userInput, index) => {
    setToDoList(toDoList.concat({key: {index} ,id: toDoList.length + 1, task: userInput}))
  }

  return (
    <Wrapper>
      <Title>TO DO LIST</Title>
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList={toDoList} handleDelete={handleDelete} />
    </Wrapper>
  );
}

export default TodoList;