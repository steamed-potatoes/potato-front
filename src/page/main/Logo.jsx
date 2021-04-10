import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  border: 1px solid black;
`;

const Search = styled.div`
  width: 240px;
  margin: 24px 40px;
  padding: 0px 16px;

  border: 1px solid black;
  border-radius: 12px; 
`;

const SearchInput = styled.input`
  padding: 8px;

  border: none;
`;

const SearchButton = styled.button`
  border: none;
  background-color: white;
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
        <SearchButton>검색</SearchButton>
      </Search>
      <LogoImg>LOGO</LogoImg>
    </LogoWrapper>
  );
}

export default Logo;