import React from 'react';
import styled from 'styled-components';
import { HeaderMenu } from 'components/header';
import BackgroundImg from '../../images/BackgroundImg.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${BackgroundImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 520px;
`;

const MainWrapper = styled.div`
  width: 80%;
  margin-top: 88px;
  border-radius: 24px;
  box-shadow: 4px 8px 8px 2px rgba(0, 0, 0, 0.26);
  padding: 56px;
`;

const BoardMain = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <MainWrapper />
    </Wrapper>
  );
};

export default BoardMain;
