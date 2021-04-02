import React from 'react';
import styled from 'styled-components';
import HeaderMenuList from './HeaderMenuList';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72px;
  padding: 16px;

  font-size: 24px;
`;

const Manager = styled.div``;

export const HeaderMenu = () => {
  return (
    <Header>
      <Manager>관리자</Manager>
      <HeaderMenuList />
    </Header>
  );
}