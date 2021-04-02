import React from 'react';
import styled from 'styled-components';

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

export const ListItems = ({ id, text, onDelete }) => {
  const onClickDelTodo = (e) => onDelete(e.target.id);

  return (
    <Item>
      <DelbtnArea>
        <Delbtn id={id} onClick={onClickDelTodo}>
          X
        </Delbtn>
      </DelbtnArea>
      <Text>{text}</Text>
    </Item>
  );
};
