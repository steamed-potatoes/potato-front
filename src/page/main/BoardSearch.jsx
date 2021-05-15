import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BoardThumbnail } from 'components/BoardThumbnail';
import { HeaderMenu } from 'components/header';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import styled from 'styled-components';
import BackgroundImg from '../../images/BackgroundImg.png';
import ScrollImg from '../../images/ScrollImg.png';

const Wrapper = styled.div`
  height: 100%;
  background-image: url(${BackgroundImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: auto;
  padding-bottom: 520px;
`;

const Search = styled.div`
  width: 300px;
  margin: 24px 40px;
  padding: 8px 16px 0;
  background-color: white;
  border: none;
  border-radius: 32px;
  box-shadow: 10px 5px 5px gray;
`;

const SearchInput = styled.input`
  width: 84%;
  font-size: 16px;
  vertical-align: middle;
  outline: none;
  border: none;
  margin-bottom: 8px;
`;

const BoardSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  margin-top: 80px;
  margin-left: 104px;
`;

const HashButtonWrapper = styled.div`
  align-items: left;
  justify-content: flex-start;
  margin-left: 144px;
`

const HashButton = styled.button`
  background-color: white;
  border-radius: 32px;
  border: 4px solid #F0B138;
  height: 64px;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 16px 8px 16px;
  margin: 8px;
`

const BoardSearchItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 144px;
`;

const BoardSearchItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ItemDetail = styled.div`
  margin: 10px;
  flex-basis: auto;
  flex-shrink: 2;
  width: 200px;
  height: 232px;
  background-color: gray;
`;

const Scroll = styled.button`
  background-color: white;
  background-image: url(${ScrollImg});
  height: 32px;
  width: 112px;
  border: 0;
  margin-top: 24px;
  cursor: pointer;
`

const BoardSearch = () => {
  const [searchItem, setSearchItem] = useState([]);
  const [lastBoard, setLastBoard] = useState();

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getBoardSearch();
        setSearchItem(data.data);
        setLastBoard(data.data[data.data.length-1].boardId);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  const ScrollButton = async() => {
    try {
      const { data } = await sendApi.getBoardScroll(lastBoard, 10);
      if(data.length !== 0)
      {
        setSearchItem(searchItem.concat(data.data));
        setLastBoard(data.data[data.data.length-1].boardId);
      }
    } catch {
      document.getElementById("Scroll").style.display="none";
    }
  }
  
  return (
    <Wrapper>
      <HeaderMenu />
      <BoardSearchWrapper>
        <Search>
          <SearchInput />
          <BiSearch size="30" />
        </Search>
      </BoardSearchWrapper>
      <HashButtonWrapper>
        <HashButton>#학사일정</HashButton>
        <HashButton>#공지</HashButton>
        <HashButton>#이벤트</HashButton>
        <HashButton>#모집</HashButton>
        <HashButton>#행사</HashButton>
        <HashButton>#동아리</HashButton>
      </HashButtonWrapper>
      <BoardSearchItemWrapper>
        <BoardSearchItem>
          {searchItem.length ? (
            searchItem.map((data) => (
              <BoardThumbnail
                boardImageUrl={data.boardImageUrl}
                boardTitle={data.boardTitle}
                orgName={data.orgName}
                key={data.boardId}
              />
            ))
          ) : (
            <ItemDetail />
          )}
        </BoardSearchItem>
        <Scroll type="button" id="Scroll" onClick={ScrollButton} />  
      </BoardSearchItemWrapper>
    </Wrapper>
  )
}

export default BoardSearch;