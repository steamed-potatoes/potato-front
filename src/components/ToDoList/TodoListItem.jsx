import React from 'react';
import styled from 'styled-components';

// todo 객체를 props로 받아온다
const TodoListItem = ({ todo,onRemove }) => {
  // 객체 비구조화
  // todo객체의 id,text가 있기에 가능
  const { id, text }   = todo;

  return (
    <ListItem>
      <CloseBar>
        <CloseBtn onClick={() => onRemove(id)}>X</CloseBtn>
      </CloseBar>
      <TextBox> {text}</TextBox>
    </ListItem>
  );
};

const ListItem = styled.div`
  display : flex;
  flex-direction: column;
  margin : 30px 0px;
`;


const CloseBar = styled.div`
  text-align:right;
  width:800px;
  height : 32px;
  color : red;
  background: yellow;
  border : 1px solid black;
`;

const CloseBtn = styled.span`
  cursor : pointer;
`;

const TextBox =styled.div`
  border : 1px solid black;
  width : 800px;
  height : 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight : bold;
  font-size : 50px;
`;
export default TodoListItem;