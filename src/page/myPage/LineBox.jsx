import React from 'react';
import styled from 'styled-components';

const LineBox = () => {
  return (
    <Wrapper>
      <Line width="48" color="#BCBCBC" storke="2" />
      <Line width="255" color="#F0B138" storke="3" />
      <Line width="1337" color="#BCBCBC" storke="2" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1640px;
  height : 0px;
  display: flex;
  align-items: center;
`;
const Line = styled.hr`
  width: ${(props) => props.width}px;
  height: 0px;
  border: ${(props) => props.storke}px solid ${(props) => props.color};
  margin-top: -48px;
`;

export default LineBox;