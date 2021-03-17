import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const BoardScreen = () => {
  const { inputContents } = useSelector((state) => state.content);

  return (
    <Show>
      <Content>{inputContents}</Content>
    </Show>
  );
};

const Show = styled.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(30, 130, 76);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 400px;
`;

const Content = styled.div`
  font-size: 24px;
  color: rgb(255, 255, 255);
  margin: 0px;
  white-space: pre-wrap;
`;
