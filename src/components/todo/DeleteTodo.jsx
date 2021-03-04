import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  color: red;
`;

export const DeleteTodo = ({ onClickDeleteButton }) => {
  return <Wrapper onClick={onClickDeleteButton}>X</Wrapper>;
};
