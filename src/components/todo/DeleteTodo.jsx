import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  color: red;
`;

export const DeleteTodo = ({ setTodos, todos, todo }) => {
  const onClickDeleteButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return <Wrapper onClick={() => onClickDeleteButton(todo.id)}>X</Wrapper>;
};

DeleteTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  todo: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
