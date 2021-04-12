import React from 'react';
import styled from 'styled-components';
import GroupBox from './MakeGroupBox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const MakeGroupMain = () => {
  return (
    <Wrapper>
      <GroupBox />
    </Wrapper>
  );
};

export default MakeGroupMain;
