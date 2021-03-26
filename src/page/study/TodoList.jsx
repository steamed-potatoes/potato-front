import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ToDoList, AddToDo } from 'components/ToDoList';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 85px;
`;

let count = 0;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        setError(null);
        setTodoList(null);

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setTodoList(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchTodoList();
  }, []);

  const onAddTodo = (task) => {
    setTodoList(todoList.concat({ id: count++, task }));
  };

  const onDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!todoList) return null;


  return (
    <Wrapper>
      <Title>TO DO LIST</Title>
      <AddToDo onAddTodo={onAddTodo} />
      <ToDoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </Wrapper>
  );
};

export default TodoList;
