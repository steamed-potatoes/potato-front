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
          'http://52.78.179.189:8080/api/v1/todo/list'
        );
        setTodoList(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchTodoList();
  }, []);

  const onAddTodo = (title) => {
    setTodoList(todoList.concat({data:{ id: count++, title }}));
  };

  const onDeleteTodo = (id) => {
    if (id <= 100){ // 어떻게 구분해야 할까?
      id = Number(id)
    }
    setTodoList(todoList.filter((todo) => todo.data.id !== id));
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!todoList) return null;

  // const test = todoList[0].data.title
  // console.log(test);

  return (
    <Wrapper>
      <Title>TO DO LIST</Title>
      <AddToDo onAddTodo={onAddTodo} />
      <ToDoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </Wrapper>
  );
};

export default TodoList;
