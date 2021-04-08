import React from 'react';
import styled from 'styled-components';
import PopularGroup from './PopularGroup';
import Intermissionless from './Intermissionless';

const Wrapper = styled.div``;

const Main = () => {
  return(
    <Wrapper>
      <PopularGroup />
      <Intermissionless />
    </Wrapper>
  );
}

export default Main;