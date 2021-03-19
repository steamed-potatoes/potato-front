import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as createActions from '../../libs/store/modules/blackboard';

const Input = styled.input`
  font-size: 16px;
  text-align: center;
  width: 70vw;
`;

export const InputText = () => {
  const dispatch = useDispatch();

  const onChangeText = (e) => dispatch(createActions.boardSet(e.target.value));

  return(
    <Input type="text" placeholder="입력해주세요" onChange={onChangeText} />
  )
}