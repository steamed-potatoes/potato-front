import React ,{useState} from 'react';
import styled from 'styled-components';
import {ToDoList, AddToDo} from 'components/ToDoList';

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

    const onAddTodo = (task) => {
        setTodoList(todoList.concat({key:todoList.length + 1, id:todoList.length + 1, task}));
    };

    const onDeleteTodo = (id) => {
        setTodoList(todoList.filter((todo)=> todo.id !== id));
    };

  return (
    <Wrapper>
      <Title>TO DO LIST</Title>
      <AddToDo onAddTodo={onAddTodo} />
      <ToDoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </Wrapper>
  );
}

export default TodoList;