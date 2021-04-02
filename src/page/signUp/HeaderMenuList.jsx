import React from 'react';
import styled from 'styled-components';

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

const HeaderMenuList = () => {
  return (
    <MenuList>
      <MenuItem>Home</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Sign up</MenuItem>
    </MenuList>
  );
};

export default HeaderMenuList;
