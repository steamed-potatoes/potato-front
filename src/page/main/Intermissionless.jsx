import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.p`
  line-height: 8px;
  font-size: 24px;
  margin-left: 8px;
  margin-top: 80px;
`;

const SubTitle = styled.p`
  line-height: 8px;
  font-size: 8px;
  margin-left: 8px;
`;

const ContentWreapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: gray;
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin-right: 8px;
  margin-left: 8px;
`;

const LeftButton = styled.button`
  position: relative;
  top: 80px;
  float: left;
  width: 40px;
  height: 40px;
`;

const RightButton = styled.button`
  position: relative;
  top: 80px;
  float: right;
  width: 40px;
  height: 40px;
`;

const Intermissionless = () => {
  return (
    <Wrapper>
      <Title>마감이 얼마 남지 않은 일정</Title>
      <SubTitle>마감이 얼마 남지 않았어요</SubTitle>
      <ContentWreapper>
        <Content>
          <LeftButton>&#60;</LeftButton>
        </Content>
        <Content />
        <Content>
          <RightButton>&#62;</RightButton>
        </Content>
      </ContentWreapper>
    </Wrapper>
  );
};

export default Intermissionless;
