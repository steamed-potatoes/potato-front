import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as createActions from '../libs/store/modules/user';

const Example = () => {
  const { test } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onTest = () => dispatch(createActions.userTest());
  const testConsoleLog = () => console.log('TEST :: ', test);

  return (
    <div>
      <TestButton onClick={onTest}>
        누르면 리덕스 함수 실행
      </TestButton>
      <TestButton onClick={testConsoleLog}>
        누르면 콘솔로그
      </TestButton>
    </div>
  )
}

const TestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 176px;
  padding: 8px;
  outline: none;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
  &: not(: hover) {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

export default Example;