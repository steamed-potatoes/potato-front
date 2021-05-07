import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 192px;
`;

const Title = styled.p`
  line-height: 8px;
  font-size: 40px;
  margin: 0 0 24px 8px;

  font-weight: bold;
`;

const SubTitle = styled.p`
  line-height: 8px;
  font-size: 16px;
  margin-left: 8px;
`;

const LinkBtn = styled.a`
  background-color: #f0b138;
  width: 32px;
  height: 32px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: white;
  padding: 0 8px 16px 8px;
  margin: 16px 0 24px 0;
  border-radius: 32px;
`;

const ContentWreapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: #bababa;
  width: 240px;
  height: 240px;
  border: none;
  border-radius: 32px;
  margin-right: 8px;
  margin-left: 8px;
`;

const LeftButton = styled.button`
  position: relative;
  top: 100px;
  float: left;
  font-size: 32px;
  font-weight: bold;
  color: gray;
  border-radius: 0 24px 24px 0;
  border: none;
  width: 40px;
  height: 40px;
  text-align: left;
`;

const RightButton = styled.button`
  position: relative;
  top: 100px;
  float: right;
  font-size: 32px;
  font-weight: bold;
  color: gray;
  border-radius: 24px 0 0 24px;
  border: none;
  width: 40px;
  height: 40px;
  text-align: right;
`;

const Intermissionless = () => {
  return (
    <Wrapper>
      <Title>마감이 얼마 남지 않은 일정</Title>
      <SubTitle>마감이 얼마 남지 않았어요</SubTitle>
      <LinkBtn>+</LinkBtn>
      <ContentWreapper>
        <Content>
          <LeftButton>&#60;</LeftButton>
        </Content>
        <Content />
        <Content />
        <Content />
        <Content>
          <RightButton>&#62;</RightButton>
        </Content>
      </ContentWreapper>
    </Wrapper>
  );
};

export default Intermissionless;
