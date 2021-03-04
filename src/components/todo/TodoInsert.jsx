import React, { useState } from 'react';
import styled from 'styled-components';


export const TodoInsert = () => {
  const [ text, setText ] = useState('');

  const onChangeText = (e) =>{
		setText(e.target.value);
  }

  const onClickAddButton = () => {
    
  }

  return(
    <Wrapper>
      <Input
        type="text"
        value={text}
        onChangeText={onChangeText}
        placeholder="You can write this input box"
      />
      <AddButton onClick={onClickAddButton}>ADD</AddButton>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
  display: flex;
`;

const Input = styled.input`
  width: 920px;
  height: 32px;
  text-align: center;
  size: 24px;
`
const AddButton = styled.button`
  width: 96px;
  height: 40px;
  background-color: black;
  border: 0;
  outline: 0;
  color: white;
`

