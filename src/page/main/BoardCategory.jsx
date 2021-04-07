import React from 'react';
import styled from 'styled-components';

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

const CategoryWrapper = styled.button`
  width: 160px;
  height: 192px;
  margin: 12px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: none;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 8px 12px 4px 0 rgba(0, 0, 0, 0.24),
      0 0 1px 0 rgba(0, 0, 0, 0.19);
  }
`;

const CategoryName = styled.div`
  font-size: 16px;
  margin-top: -48px;
  color: gray;
`;

const CategorySymbol = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgrey;
`;

const BoardCategory = ({ setCategory }) => {
  return (
    <BoardCategoryWrapper>
      <BoardCategoryTitle>Menu</BoardCategoryTitle>
      <Line>
        <CategoryWrapper
          onClick={() => {
            setCategory('전체보기');
          }}
        >
          <CategorySymbol />
          <CategoryName>전체보기</CategoryName>
        </CategoryWrapper>
        <CategoryWrapper
          onClick={() => {
            setCategory('학사일정');
          }}
        >
          <CategorySymbol />
          <CategoryName>학사일정</CategoryName>
        </CategoryWrapper>
        <CategoryWrapper
          onClick={() => {
            setCategory('공지');
          }}
        >
          <CategorySymbol />
          <CategoryName>공지</CategoryName>
        </CategoryWrapper>
      </Line>
      <Line>
        <CategoryWrapper
          onClick={() => {
            setCategory('이벤트');
          }}
        >
          <CategorySymbol />
          <CategoryName>이벤트</CategoryName>
        </CategoryWrapper>
        <CategoryWrapper
          onClick={() => {
            setCategory('모집');
          }}
        >
          <CategorySymbol />
          <CategoryName>모집</CategoryName>
        </CategoryWrapper>
        <CategoryWrapper
          onClick={() => {
            setCategory('행사');
          }}
        >
          <CategorySymbol />
          <CategoryName>행사</CategoryName>
        </CategoryWrapper>
      </Line>
    </BoardCategoryWrapper>
  );
};

export default BoardCategory;
