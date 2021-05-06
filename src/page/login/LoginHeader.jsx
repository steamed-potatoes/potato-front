import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  margin: 0;
  padding: 32px 40px 0px 64px;
  font-size: 16px;
`;

const Manager = styled.div`
  padding: 16px;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const MenuItem = styled.li`
  float: right;
  display: block;
  padding: 16px 16px;
`;

export const LoginHeader = () => {
  return (
    <Header>
      <Manager>관리자</Manager>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Login</MenuItem>
      </MenuList>
    </Header>
  );
}