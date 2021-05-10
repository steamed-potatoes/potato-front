import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import localStorageService from 'libs/localStorageService';
import { Menu } from 'antd';
import { AiOutlineBell, AiOutlineMessage } from 'react-icons/ai';
import userHook from 'hooks/userHook';

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
`;

const MenuIcon = styled.div`
  align-items: center;
  margin: 0px 16px;
`;

const MenuUserSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

const MenuSet = styled.div`
  width: 150px;
  height: 50px;
`;

const Picture = styled.img`
  height: 40px;
  width: 40px;
  background-color: #e2e2e2;
  border: 1px solid black;
  border-radius: 20px;
`;

const LoginButton = styled.a`
  margin: 0px 24px 0px 0px;
  font-size: 16px;
  color: black;
  background-color: white;
  border: none;
`;

const HeaderMenuList = () => {
  const myInfo = userHook(localStorageService.get('authToken'));
  const history = useHistory();
  const [openKeys, setOpenKeys] = useState(['']);
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ['sub1'];

  const handleLogOutClick = () => {
    localStorageService.delete('authToken');
    history.push('/Main');
  };

  const handleMyPageClick = () => {
    history.push('/MyPage');
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  if (!localStorage.authToken)
    return <LoginButton href="/">로그인하기</LoginButton>;

  return (
    <MenuList>
      <MenuIcon>
        <AiOutlineBell size="35px" />
      </MenuIcon>
      <MenuIcon>
        <AiOutlineMessage size="35px" />
      </MenuIcon>
      <MenuUserSet>
        <Picture src={myInfo.profileUrl} />
        <MenuSet>
          <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
            <SubMenu key="sub1" title={myInfo.name}>
              <Menu.Item key="1" onClick={handleMyPageClick}>
                마이페이지
              </Menu.Item>
              <Menu.Item key="2" onClick={handleLogOutClick}>
                로그아웃
              </Menu.Item>
            </SubMenu>
          </Menu>
        </MenuSet>
      </MenuUserSet>
    </MenuList>
  );
};

export default HeaderMenuList;
