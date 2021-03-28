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
          'http://52.78.179.189:8080/api/v1/todo/list'
        );
        setTodoList(response.data);
        console.log(response.data)
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchTodoList();
  }, []);

  const onAddTodo = async (title) => {
    try {
      const text = JSON.stringify({title})
      const todo = await axios.post(
        'http://52.78.179.189:8080/api/v1/todo',
        text,
          {
            headers: {
              "Content-Type": `application/json`,
            }
          });
      setTodoList(todoList.concat(todo.data));
    } catch (e) {
      setError(e);
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://52.78.179.189:8080/api/v1/todo?todoId=${id}`);
      setTodoList(todoList.filter((todo) => todo.data.id !== id));
    } catch (e) {
      setError(e);
    }
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
