import React from 'react';
import styled from 'styled-components';
import { ListItems } from './ListItems';

export const ListTemplate = ({ todos, onDelete }) => {
  return (
    <List>
      {todos.map(({ id, text }) => (
        <ListItems key={id} id={id} text={text} onDelete={onDelete} />
      ))}
    </List>
  );
};

const List = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
