import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ToDoList, AddToDo } from 'components/ToDoList';
import swal from 'sweetalert';
import sendApi from 'libs/api/sendApi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 85px;
`;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const {data} = await sendApi.getTodoList();  
        setTodoList(data);
      } catch (e) {
        swal(`${e}`);
      }
    };

    fetchTodoList();
  }, []);

  const onAddTodo = async (title) => {
    try {
      const { data } = await sendApi.addTodo({
        title,
        headers: {
          'Content-Type': `application/json`,
        },
      });
      setTodoList(todoList.concat(data));
    } catch (e) {
      swal(`${e}`);
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await sendApi.deleteTodo(id);
      setTodoList(todoList.filter((todo) => todo.data.id !== id));
    } catch (e) {
      swal(`${e}`);
    }
  };
  

  return (
    <Wrapper>
      <Title>TO DO LIST</Title>
      <AddToDo onAddTodo={onAddTodo} />
      <ToDoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </Wrapper>
  );
};

export default TodoList;
