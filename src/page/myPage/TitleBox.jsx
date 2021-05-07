import React from 'react';
import styled from 'styled-components';

export const TitleBox = () => {
  return (
    <Wrapper>
      <ProfileTitle>마이 페이지</ProfileTitle>
      <ProfileSubTtile>나의 프로필을 자유롭게 변경하세요!</ProfileSubTtile>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display : flex;
  font-size : 18px;
  align-items: center;
`;
const ProfileTitle = styled.div`
  width: 272px;
  font-weight : bold;
  margin-left: 48px;
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 50px;
`;
const ProfileSubTtile = styled.p`
  color : gray;
  font-size : 18px;
  margin-left : 16px;
`;
