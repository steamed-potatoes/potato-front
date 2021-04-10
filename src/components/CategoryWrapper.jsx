import React from 'react';
import styled from 'styled-components';

const Category = styled.button`
  cursor: pointer;
  width: 160px;
  height: 192px;
  margin: 12px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: none;
  &:hover {
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

export const CategoryWrapper = ({ titleText }) => {
  return (
    <Category>
      <CategorySymbol />
      <CategoryName>{titleText}</CategoryName>
    </Category>
  );
};
