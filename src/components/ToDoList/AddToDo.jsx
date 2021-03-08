import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;
const Input = styled.input``;
const Button = styled.button``;

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