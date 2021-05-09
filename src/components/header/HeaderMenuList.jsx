import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GoogleBell from './GoogleBell';
import GoogleMessage from './GoogleMessage';
import sendApi from '../../apis/sendApi';

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;
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

const Picture = styled.img`
  height: 40px;
  width: 40px;
  background-color: #e2e2e2;
  border: 1px solid black;
  border-radius: 20px;
`;

const MenuButton = styled.a`
  margin: 0px 0px 0px 24px;
  font-size: 16px;
  color: black;
  background-color: white;
  border: none;
`;

const HeaderMenuList = () => {
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const { data } = await sendApi.getMyInfo();

        setMyInfo(data.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    getMyInfo();
  }, []);

  return (
    <MenuList>
      <MenuIcon>
        <GoogleBell />
      </MenuIcon>
      <MenuIcon>
        <GoogleMessage />
      </MenuIcon>
      <MenuUserSet>
        <Picture src={myInfo.profileUrl} />
        <MenuButton href="/MyPage">{myInfo.name}</MenuButton>
      </MenuUserSet>
    </MenuList>
  );
};

export default HeaderMenuList;
