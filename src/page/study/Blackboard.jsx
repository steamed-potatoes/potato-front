import React from 'react';
import styled from 'styled-components';
import { Screen, InputText } from '../../components/Blackboard/index';

const Blackboard = () => {
  return(
    <Wrapper>
      <Title>디지털 칠판</Title>
      <Screen />
      <InputText />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 48px;
`;

export default Blackboard;