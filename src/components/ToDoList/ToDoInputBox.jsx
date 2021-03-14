import { useState,React } from 'react';
import styled from 'styled-components';

export const ToDoInputBox = ({ onInsert }) => {
  const [content,setContent] = useState('');

  const onChangeContent = (e) =>{
    setContent(e.target.value);
  }

  const onSubmit=(e)=>{
    onInsert(content)
    setContent('')
    e.preventDefault();
  }

  return (
    <InputBox>
      <TextBox type="text" value={content} placeholder="You can write here" onChange={onChangeContent} />
      <SubmitBtn type="submit" onClick={onSubmit}>ADD</SubmitBtn>
    </InputBox>
  );
};

const InputBox = styled.form`
  display: flex;
`;
const TextBox = styled.input`
  width : 800px;
  height : 24px;
  text-align : center;
  border : 1px solid black;
`;
const SubmitBtn = styled.button`
color: white;
background: black;
border : none;  
width: 64px;
`;