import React, { useState } from 'react';
import styled from 'styled-components';

const Blackboard = () => {
  const [text, setText ] = useState('');

  const onText = (e) =>{
      setText(e.target.value);
  }

  return (
    <Wrapper>
      <Name>디지털 칠판</Name>
      <Board>
        {text}
      </Board>
      <Input onChange={onText} value={text} placeholder='입력해주세요' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Name = styled.h1`
  display: flex;
  align-items: top;
`

const Board = styled.div`
  display: flex;
  width: 70vw;
  height: 70vh;
  line-height: 1.5;
  background: #2E8B57;
`

const Input = styled.input`
  display: flex;
  width: 69vw;
  text-align: center;
`


export default Blackboard;
