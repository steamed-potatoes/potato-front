import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 40px;
`;

const MenuList = styled.ul`
  list-style-type: none;

  padding: 0px;
`;

const MenuItem = styled.li`
  float: left;

  display: block;

  padding: 16px 16px;
`;

const MenuTitle = styled.p`
  font-weight: bold;
`;

const MenuButtonList = styled.div``;

const MenuButton = styled.button`
  padding: 16px 16px;

  border: none;
  background-color: white;
 
  font-size: 16px;
  
`;

const HeaderMenu = () => {

  return (
    <Menu>
      <MenuList>
        <MenuItem>홈</MenuItem>
        <MenuItem>로그인</MenuItem>
      </MenuList>
      <MenuTitle>슬기로운 감자생활</MenuTitle>
      <MenuList>
        <MenuItem>전체보기</MenuItem>
        <MenuItem>학사일정</MenuItem>
        <MenuItem>공지</MenuItem>
        <MenuItem>이벤트</MenuItem>
        <MenuItem>모집</MenuItem>
        <MenuItem>행사</MenuItem>
      </MenuList>
      <MenuButtonList>
        <MenuButton>네모</MenuButton>
        <MenuButton>네모</MenuButton>
        <MenuButton>동그라미</MenuButton>
        <MenuButton>이서윤 ∨</MenuButton>
      </MenuButtonList>
    </Menu>
  );
}

export default HeaderMenu;