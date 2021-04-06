import React from 'react';
import styled from 'styled-components';
import HeaderMenuList from './HeaderMenuList';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72px;
  margin: 0;
  padding: 48px 48px 0px 48px;

  font-size: 24px;
`;

const Manager = styled.div`
  padding: 16px;
`;

export const HeaderMenu = () => {
  return (
    <Header>
      <Manager>관리자</Manager>
      <HeaderMenuList />
    </Header>
  );
}