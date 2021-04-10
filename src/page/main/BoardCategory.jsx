import React from 'react';
import styled from 'styled-components';
import { CategoryWrapper } from 'components/Main/CategoryWrapper';

const BoardCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoardCategoryTitle = styled.div`
  margin: 32px 0 16px 16px;
  font-size: 36px;
  font-weight: bold;
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
