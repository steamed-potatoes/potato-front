import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  width: 1016px;
  height: 80px;
  margin: 24px auto;
  border: solid black 1px;
`;
const DelbtnArea = styled.div`
  display: flex;
  background-color: yellow;
  height: 24px;
  border-bottom: solid black 1px;
`;

const Delbtn = styled.button`
  color: red;
  background-color: yellow;
  margin-left: auto;
  border: 0;
  outline: 0;
`;

const Text = styled.div`
  padding: 16px 8px;
  font-size: 16px;
`;

export const ListItems = ({ todolist, onDelete }) => {
  const onClickDelTodo = (e) => {
    onDelete(Number(e.target.id));
  };

  return (
    <List>
      {todolist.map((todo) => (
        <Item>
          <DelbtnArea>
            <Delbtn id={todo.id} onClick={onClickDelTodo}>
              X
            </Delbtn>
          </DelbtnArea>
          <Text>{todo.text}</Text>
        </Item>
      ))}
    </List>
  );
};