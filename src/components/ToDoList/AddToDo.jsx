import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  height: 40px;
  width: 50vw;
  font-size: 16px;
  text-align: center;
  border: 1px solid;
`;

const Button = styled.button`
  height: auto;
  width: 10vw;
  font-size: 16px;
  text-align: center;
  background-color:black;
  color:white;
  border: 1px solid;
  cursor: pointer;
`;

export const AddToDo = ({onAddTodo}) => {
    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value);
    }

    return ( 
      <Wrapper>
        <Input value={task} onChange={onChange} placeholder="You can write this input box" />
        <Button onClick={()=>onAddTodo(task)}>ADD</Button>
      </Wrapper>
    );
};