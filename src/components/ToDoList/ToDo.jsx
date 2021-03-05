import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: block;
  flex-direction: column;
  border: 1px solid #000;
  width: 1000px;
  margin : 40px 0 0;
`;

const Btn = styled.div`
  border-bottom: 1px solid #000;
  background-color: #FFFF7E;
  padding: 8px;
  text-align: right;
`;

const Button = styled.button`
  background-color: #FFFF7E;
  color: red;
  border: none;
  font-size: 24px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 32px;
  padding: 16px;
`;

export const ToDo = ({todo, handleDelete}) =>{

    const handleDeleteTodo = (e) => {
        handleDelete(Number(e.target.id))
      };

    return (
      <Item>
        <Btn>
          <Button id={todo.id} onClick={handleDeleteTodo}>
            x
          </Button>
        </Btn>
        <Text>{todo.task}</Text>
      </Item>
    );
} 