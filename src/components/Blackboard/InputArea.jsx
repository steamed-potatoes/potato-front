import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as createActions from '../../libs/store/modules/contents';

export const InputArea = () => {
  const dispatch = useDispatch();

  const onChangeContents = (e) => {
    dispatch(createActions.setContents(e.target.value));
  };

  return (
    <InputBox
      type="text"
      placeholder="입력해주세요"
      onChange={onChangeContents}
    />
  );
};

const InputBox = styled.input`
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
  height: 32px;
  text-align: center;
`;
