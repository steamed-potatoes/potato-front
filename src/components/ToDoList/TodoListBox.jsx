import React from 'react';
import TodoListItem from './TodoListItem'


//  todos라는 객체배열을 props로 받아온후 maps를 통해서 TodoListItem으로 원소를 각각 렌더링해줌
// map을 이용하여 컴포넌트를 다룰 때는 key라는 props를 전달해주어야한다. 이때 각 객체의 고유값인 id를 만들어서 전달해준다.

// 그리고 TodoListItem컴포넌트에서 다룰 데이터는 통째로 props로 전달하면 된다.
// props들을 위에서 받아 다른 컴포넌트에게 넘겨주는것
// 목록 삭제하는 함수도 넘겨줌
export const TodoListBox = ({ todos, onRemove }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

