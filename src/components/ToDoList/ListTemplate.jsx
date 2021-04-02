import React from 'react';
import styled from 'styled-components';
import { ListItems } from './ListItems';

const List = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ListTemplate = ({ todos, onDelete }) => {
  return (
    <List>
      {todos.map(({ data }) => (
        <ListItems
          key={data.id}
          id={data.id}
          text={data.title}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};
