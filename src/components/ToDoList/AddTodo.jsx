import React, { useState } from 'react';
import styled from 'styled-components';

const AddTodoTemplate = styled.div`
  margin: auto;
  display: flex;
`;

const TodoText = styled.input`
  width: 920px;
  height: 32px;
  text-align: center;
`;

const Addbtn = styled.button`
  width: 96px;
  height: 40px;
  background-color: black;
  border: 0;
  outline: 0;
  color: white;
`;

export const AddTodo = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onChangeText = (e) => setText(e.target.value);

  return (
    <AddTodoTemplate>
      <TodoText
        type="text"
        name="todotext"
        onChange={onChangeText}
        placeholder="You can write this input box"
      />
      <Addbtn type="button" onClick={() => onInsert(text)}>
        ADD
      </Addbtn>
    </AddTodoTemplate>
  );
};
