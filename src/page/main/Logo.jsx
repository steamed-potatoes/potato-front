import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #bababa;
  border-top: none;
`;

const Search = styled.div`
  width: 300px;
  margin: 24px 40px;
  padding: 8px 16px 0;
  background-color: white;
  border: none;
  border-radius: 32px;
`;

const SearchInput = styled.input`
  width: 84%;
  font-size: 16px;
  vertical-align: middle;
  outline: none;
  border: none;
  margin-bottom: 8px;
`;

const LogoImg = styled.p`
  margin: 80px 80px;

  font-size: 120px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Search>
        <SearchInput />
        <BiSearch size="30" />
      </Search>
      <LogoImg>LOGO</LogoImg>
    </LogoWrapper>
  );
};

export default Logo;
