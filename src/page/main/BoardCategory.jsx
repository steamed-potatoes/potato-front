import React from 'react';
import styled from 'styled-components';
import { CategoryWrapper } from 'components/CategoryWrapper';

const BoardCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 192px;
`;
const BoardCategoryTitle = styled.div`
  margin: 32px 0 8px 16px;

  display: block;
  font-size: 40px;
  font-weight: bold;
  &::after {
    content: '';
    padding-bottom: 12px;
    display: block;
    margin-left: 32px;
    width: 48px;
    border-bottom: solid #686868 2px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BoardCategory = () => {
  return (
    <BoardCategoryWrapper>
      <BoardCategoryTitle>Menu</BoardCategoryTitle>
      <Line>
        <CategoryWrapper titleText="전체보기" />
        <CategoryWrapper titleText="학사일정" />
        <CategoryWrapper titleText="공지" />
      </Line>
      <Line>
        <CategoryWrapper titleText="이벤트" />
        <CategoryWrapper titleText="모집" />
        <CategoryWrapper titleText="행사" />
      </Line>
    </BoardCategoryWrapper>
  );
};

export default BoardCategory;
