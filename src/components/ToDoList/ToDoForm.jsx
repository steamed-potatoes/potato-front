import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Input = styled.input`
  border: 1px solid #000;
  width: 800px;
  height: 10px;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 4px;
  outline: none;
  text-align: center;
`;
const Button = styled.button`
  border: 1px solid #000;
  cursor: pointer;
  width: 80px;
  height: 42px;
  padding: 16px;
  margin-bottom: 4px;
  background-color: #000;
  color: #fff;
  outline: none;
`;

export const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
    }
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="You can write this input box"
        />
        <Button>ADD</Button>
      </Form>
    );
};

