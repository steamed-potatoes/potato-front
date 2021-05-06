import React from 'react';
import styled from 'styled-components';

const TitleBox = () => {
  return (
    <Wrapper>
      <EditProfile>마이 페이지</EditProfile>
      <Explanation>나의 프로필을 자유롭게 변경하세요!</Explanation>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display : flex;
  font-size : 18px;
  align-items: center;
`;
const EditProfile = styled.div`
  width: 272px;
  font-weight : bold;
  margin-left: 48px;
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 50px;
`;
const Explanation = styled.p`
  color : gray;
  font-size : 18px;
  margin-left : 16px;
`;

export default TitleBox;