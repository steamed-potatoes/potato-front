import React from 'react';
import styled from 'styled-components';

const TodoItemWrap = styled.div`
  display: block; // block 처럼 보여줌
  flex-direction: column; //수직 정렬
  border: 1px solid black;
  width: 80vw;
`
const ButtonWrap = styled.div`
  border-bottom: 1px solid black;
  background-color: yellow;
  padding: 8px;
  height: 24px;
  text-align: right;
`
const Button = styled.button`
  color: red;
  font-size: 16px;
  background-color: yellow;
  outline: 0;
  border: 0;
`
const TodoWrap = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 24px;
`

export const TodoItems = ({todo, onDelete}) => {
  console.log(todo)
  return(
    <TodoItemWrap>
      <ButtonWrap>
        <Button id={todo.id} onClick={(e)=>onDelete(Number(e.target.id))}>
          x
        </Button>
      </ButtonWrap>
      <TodoWrap>
        {todo.text}
      </TodoWrap>
    </TodoItemWrap>
  )
}