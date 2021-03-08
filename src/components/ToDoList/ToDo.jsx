import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div``;
const Task = styled.div``;
const Button = styled.button``;

export const ToDo = ({todo, onDeleteTodo}) => {
  return (
    <Wrapper>
      <Button id={todo.id} onClick={(e)=>onDeleteTodo(Number(e.target.id))}>X</Button>
      <Task>{todo.task}</Task>
    </Wrapper>
  );
};