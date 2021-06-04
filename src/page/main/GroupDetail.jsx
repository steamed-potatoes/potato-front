import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from 'images/BackgroundImg.png';
import { HeaderMenu } from 'components/header';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 520px;
  float: left;
`;


const GroupDetail = () => {
  const [group, setGroup] = useState()

  useEffect(() => {
    group;
    setGroup;
  }, []);

  return (
    <Wrapper>
      <HeaderMenu />
    </Wrapper>
  );
};

export default GroupDetail;
