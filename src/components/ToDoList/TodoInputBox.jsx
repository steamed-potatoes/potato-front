import React, { useState,useCallback } from 'react';
import styled from 'styled-components';


// 입력과 추가할수 있는 컴포넌트
// state를 통해서 인풋의 상태 관리
export const TodoInputBox = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // submit 버튼 눌렀을때 동작할 함수
  // props로 받아온 onInsert함수에 현재의 value값을 파라미터로 넣어서 호출하고 초기화함
  const onSubmit = useCallback(
    (e) => {
      // 입력값 넣어주기
      onInsert(value);
      // 버튼 누르면 썻던 글씨 지우기
      setValue('');
    
      // 이벤트 동작 하다가 동작 중지시킴
      // 없어도 될것 같음
      e.preventDefault();

    },
    [onInsert,value]
  );
  // 값을 입력할 때마다 state인 value값에 들어가게 함
  // 이 value를 todos배열에 추가하도록 해야한다.
  // 그것은 메인에서 만든다.
  
  // 애초에 form으로 만드는 것임
  // 왜 form과 submit버튼 둘다 onsubmit함수가 들어갈까? 
  return (
    <InputBox onSubmit={onSubmit}>
      <TextBox type="text" placeholder="you can write this inputbox" value={value} onChange={onChange} />
      <SubmitBtn type="submit" onSubmit={onSubmit}> ADD </SubmitBtn>
    </InputBox>
  );
};

const InputBox = styled.form`
  display: flex;
`;
const TextBox = styled.input`
  width: 720px;
  height: 32px;
  text-align : center;
`;

const SubmitBtn = styled.button`
  background: black;
  color: white;
  width: 80px;
  height: 40px;
`;
