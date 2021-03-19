import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const BlackScreen = styled.div`
  color: black;
  display: flex;
  font-size: 16px;
  width: 70vw;
  height: 400px;
  background-color: green;
  justify-content: center;
  align-items: center;
`

export const Screen = () => {
  const { content } = useSelector(state => state.board)
  return(
    <BlackScreen>{ content }</BlackScreen>
  )
}