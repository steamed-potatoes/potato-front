import React from 'react';
import styled from 'styled-components';
import {Input, Output} from 'components/board';

const Blackboard = () => {
    return (
      <Wrapper>
        <Title>디지털 칠판</Title>
        <Output />
        <Input />
      </Wrapper>
    );
}

export default Blackboard;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  font-size: 80px;
`;