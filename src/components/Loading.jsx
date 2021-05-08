import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Loading = () => {
  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  );
};
