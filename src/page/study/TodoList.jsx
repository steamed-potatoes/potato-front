import { TodoInputBox, TodoListBox } from 'components/ToDoList'
import React, { useState,useRef,useCallback } from 'react';
import styled from 'styled-components';


// 여기서 useState 사용해서 todos라는 상태를 정의하고
//  todos를 TodoListBox의 props로 전달한다.
// TodoListBox에서 이값을 받아온후 TodoListItem으로 변환하여 렌더링하도록 만든다.
const TodoList = () => {
  // 객체를 지닌 배열형태로 만든다.
  const [todos, setTodos] = useState([
    {
      id : 1,
      text: '리액트의 기초 알아보기'
    },
    {
      id : 2,
      text: '컴포넌트 스타일링하기'
    },
    {
      id : 3,
      text: '일정 관리 앱만들기'
    },
  ]);
  // useRef함수를 사용해서 nextId변수를 4로 초기화함
  // 이 nextId는 새로 등록할 할일 객체에 추가된다.
  const nextId = useRef(4);

  // 등록 버튼을 눌렀을 때 호출되는 함수를 onInsert함수로 정의하고 기존 객체의 key값이 모두 포함되어있는 데이터형태여야함
  // id에는 nextId값을 넣어주고
  // text에는 전달된 text값을 그대로 넣는다
  // 이함수를 추가버튼이 있는 TodoInputBox의 props로 전달한다.
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id : nextId.current,
        text,
      };
      // 배열에 뒤에 그대로 추가하는 것
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  // id를 파라미터로 받는다
  // todo.id !== id  이렇게하면 해당하는 id를 지운 배열을 반환한다.
  // true만 반환, false = 3 과 3은 같지 않다 -> false 
  const onRemove =useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <Title>TO DO LIST</Title>
      <TodoInputBox onInsert={onInsert} />
      <TodoListBox todos={todos} onRemove={onRemove} />
    </TodoTemplate>
    
  );
};

const TodoTemplate = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Title = styled.p`
  font-size: 72px;
`;
export default TodoList;