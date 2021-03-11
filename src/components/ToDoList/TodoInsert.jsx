import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInsertWrap = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row; // 수직 배치
  margin-bottom: 16px;
`
const TodoInput = styled.input`
  height: 40px;
  width: 75vw;
  font-size: 24px;
  text-align: center;
  border: 1px solid black;
`
const InsertButton = styled.button`
  width: 5vw;
  cursor: pointer;
  text-align: center;
  border: 1px solid black;
`
export const TodoInsert = ({onInsert}) => {
  const [ text, setText ] = useState('');

  const onChangeText = (e) =>{
    setText(e.target.value);
  }

  return (
    <TodoInsertWrap>
      <TodoInput onChange={onChangeText} value={text} placeholder="You can write this input" />
      <InsertButton onClick={()=>onInsert(text)}>Add</InsertButton>
    </TodoInsertWrap>
  )
}