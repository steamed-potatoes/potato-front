import React from 'react';
import { useDispatch } from 'react-redux';
import {textTest} from '../../libs/store/modules/text';
import styled from 'styled-components';


export const Input = () => {
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(textTest(e.target.value));

  return <InputText onChange={onChange} placeholder="입력해주세요" />;
}

const InputText = styled.input`
  font-size: 16px;
  text-align: center;
  width: 1024px;
  padding: 8px;
`;