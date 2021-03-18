import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Output = () => {
  const {content} = useSelector(state => state.text);
  return <OutputText>{content}</OutputText>;
}

const OutputText = styled.div`
  width: 1024px;
  height: 400px;
  background-color: #136e13;
  font-size: 24px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;