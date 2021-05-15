import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LogoSymbol from '../../images/LogoSymbol.png';
import HeaderMenuList from './HeaderMenuList';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const MenuTitleSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const MenuTitleImg = styled.img`
  background-image: url(${LogoSymbol});
  width: 113px;
  height: 31px;
  margin: 16px 16px 16px 80px;
`;

const MenuTitle = styled.p`
  margin: 16px;
  font-weight: bold;
`;

export const HeaderMenu = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/Main');
  };
  return (
    <Menu>
      <MenuTitleSet onClick={onClick}>
        <MenuTitleImg />
        <MenuTitle>슬기로운 감자생활</MenuTitle>
      </MenuTitleSet>
      <HeaderMenuList />
    </Menu>
  );
};
