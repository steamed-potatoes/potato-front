import React from 'react';
import styled from 'styled-components';
import GroupBox from './MakeGroupBox'

const Wrapper = styled.div`
  display: flex;
`

const MakeGroupMain = () => {
  return (
    <Wrapper>
      <GroupBox />
    </Wrapper>
  )
}

export default MakeGroupMain;