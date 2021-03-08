import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  flex-direction: column;
  width: 90vh;
  border: 1px solid;
  margin: 24px;
`;

const Btn = styled.div`
  border-bottom: 1px solid;
  text-align: right;
  background-color: yellow;
  padding: 8px;
`;

const Button = styled.button`
  color: red;
  font-size: 16px;
  border: none;
  background-color: yellow;
`;

const Task = styled.div`
  font-size: 32px;
  text-align: center;
  padding: 16px;
`;

export const ToDo = ({todo, onDeleteTodo}) => {
  return (
    <Wrapper>
      <Btn>
        <Button id={todo.id} onClick={(e) => onDeleteTodo(Number(e.target.id))}>
          X
        </Button>
      </Btn>
      <Task>{todo.task}</Task>
    </Wrapper>
  );
};