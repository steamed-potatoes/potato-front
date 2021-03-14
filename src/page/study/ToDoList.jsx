import styled from 'styled-components';
import { ToDoInputBox,ToDoListBox } from 'components/ToDoList'
import { useState,React } from 'react';

const TodoList = () => {
  const [todos,setTodos] = useState([])
  const [todoId,SetTodoId] =useState(0);
  // 버튼 클릭하면 넣어줄 함수
const onInsert = (text) =>{
  const newTodo={
    text,
    id : todoId
  }
  setTodos(todos.concat(newTodo))
  SetTodoId(todoId+1)
}
const onRemove = (id) =>{
  const newTodos = todos.filter((todo)=>todo.id !== id)
  setTodos(newTodos)
}
  return (
    <Main>
      <Title>TO DO LIST</Title>
      <ToDoInputBox onInsert={onInsert} />
      <ToDoListBox todos={todos} onRemove={onRemove} />
    </Main>
  );
};

const Main = styled.div`
  display : flex;
  justify-content : center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  font-size : 64px;
  font-weight : bold;
`;

export default TodoList;