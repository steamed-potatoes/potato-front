import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.a`
  cursor: pointer;
  width: 192px;
  height: 192px;
  margin: 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: none;
  &:hover {
    border: none;
    outline: none;
    background-color: #e8e8e9;
    border-radius: 32px;
  }
`;

const CategoryName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: -48px;
  color: black;
`;

const CategorySymbol = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 40px;
  background-color: #f1f3f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuCategory = ({ children, category, link }) => {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push(link)}>
      <CategorySymbol>{children}</CategorySymbol>
      <CategoryName>{category}</CategoryName>
    </Wrapper>
  );
};
