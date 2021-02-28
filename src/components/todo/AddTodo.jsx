import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 36px;
`;

const InputBox = styled.input`
  width: 90%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  outline: none;
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  min-width: 40px;
  height: 100%;
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
`;

let id = 0;

export const AddTodo = ({ setTodos, todos }) => {
  const [content, setContent] = useState('');

  const handleOnChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickAddButton = () => {
    setTodos(
      todos.concat({
        id,
        content,
      })
    );
    id += 1;
    resetInput();
  };

  const resetInput = () => {
    setContent('');
  };

  return (
    <Wrapper>
      <InputBox
        value={content}
        onChange={handleOnChangeContent}
        type="text"
        placeholder="You can write this input box"
      />
      <AddButton onClick={onClickAddButton}>ADD</AddButton>
    </Wrapper>
  );
};

AddTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
