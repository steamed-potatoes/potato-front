import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BoardThumbnail } from 'components/BoardThumbnail';
import { HeaderMenu } from 'components/header';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import styled from 'styled-components';
import { getMainPicture } from 'utils/getMainPicture';
import BackgroundImg from 'images/BackgroundImg.png';
import ScrollImg from 'images/ScrollImg.png';
import { GroupThumbnail } from './GroupThumbnail';

const Wrapper = styled.div`
  height: 100%;
  background-image: url(${BackgroundImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 520px;
  float: left;
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
`;

const HashButton = styled.button`
  background-color: ${(props) => props.color || 'white'};
  border-radius: 32px;
  border: 4px solid #f0b138;
  height: 64px;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 16px 8px 16px;
  margin: 8px;
  cursor: pointer;
`;

const BoardSearchItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 32px 144px 144px;
  float: left;
`;

const BoardSearchItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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
`;

const NoneClubList = styled.ul`
  width: 524px;
  list-style: none;
`;

const BoardSearch = () => {
  const [searchItem, setSearchItem] = useState([]);
  const [lastBoard, setLastBoard] = useState('0');
  const [type, setType] = useState('');
  const [color, setColor] = useState({
    학사일정: 'white',
    공지: 'white',
    EVENT: 'white',
    RECRUIT: 'white',
    행사: 'white',
    동아리: 'white',
  });

  const [newGroupList, setNewGroupList] = useState([]);

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getBoard(lastBoard, type);
        setSearchItem(data.data);
        setLastBoard(data.data[data.data.length - 1].boardId);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    const getNewGroup = async () => {
      try {
        const { data } = await sendApi.getGroupList();
        setNewGroupList(data.data);
        console.log(data);
      } catch (e) {
        alert(e.reponse.data.message);
      }
    };
    getNewGroup();
    receivedData();
  }, [type]);

  const ScrollButton = async () => {
    try {
      const { data } = await sendApi.getBoard(lastBoard, type);
      if (data.length !== 0) {
        setSearchItem(searchItem.concat(data.data));
        setLastBoard(data.data[data.data.length - 1].boardId);
      }
    } catch (e) {
      document.getElementById('Scroll').style.display = 'none';
    }
  };

  const chageTypeButton = (e) => {
    if (type !== '') {
      if (type === e.target.id) {
        setColor({
          ...color,
          [e.target.id]: 'white',
        });
        setLastBoard(0);
        setSearchItem([]);
        document.getElementById('Scroll').style.display = '';
        setType('');
      } else {
        setColor({
          학사일정: 'white',
          공지: 'white',
          EVENT: 'white',
          RECRUIT: 'white',
          행사: 'white',
          동아리: 'white',
          [e.target.id]: '#F0B138',
        });
        setLastBoard(0);
        setSearchItem([]);
        document.getElementById('Scroll').style.display = '';
        setType(e.target.id);
      }
    } else {
      setColor({
        ...color,
        [e.target.id]: '#F0B138',
      });
      setLastBoard(0);
      setSearchItem([]);
      document.getElementById('Scroll').style.display = '';
      setType(e.target.id);
    }
  };

  const chageTypeButton2 = (e) => {
    if (type !== '') {
      if (type === e.target.id) {
        setColor({
          ...color,
          [e.target.id]: 'white',
        });
        setLastBoard(0);
        setSearchItem([]);
        document.getElementById('Scroll').style.display = '';
        setType('');
      } else {
        setColor({
          학사일정: 'white',
          공지: 'white',
          EVENT: 'white',
          RECRUIT: 'white',
          행사: 'white',
          동아리: 'white',
          [e.target.id]: '#F0B138',
        });
        setLastBoard(0);
        setSearchItem([]);
        document.getElementById('Scroll').style.display = '';
        setType(e.target.id);
      }
    } else {
      setColor({
        ...color,
        [e.target.id]: '#F0B138',
      });
      setLastBoard(0);
      setSearchItem([]);
      document.getElementById('Scroll').style.display = '';
      setType(e.target.id);
    }
  };

  if (color.동아리 === '#F0B138') {
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
          <HashButton>학사일정</HashButton>
          <HashButton>공지</HashButton>
          <HashButton
            type="button"
            id="EVENT"
            onClick={chageTypeButton}
            color={color.EVENT}
          >
            이벤트
          </HashButton>
          <HashButton
            type="button"
            id="RECRUIT"
            onClick={chageTypeButton}
            color={color.RECRUIT}
          >
            모집
          </HashButton>
          <HashButton>행사</HashButton>
          <HashButton
            type="button"
            id="동아리"
            onClick={chageTypeButton2}
            color={color.동아리}
          >
            동아리
          </HashButton>
        </HashButtonWrapper>
        <BoardSearchItemWrapper>
          <BoardSearchItem>
            {newGroupList.length ? (
              newGroupList.map((data) => (
                <GroupThumbnail
                  name={data.name}
                  description={data.description}
                  profileUrl={data.profileUrl}
                  key={data.subDomain}
                />
              ))
            ) : (
              <NoneClubList />
            )}
          </BoardSearchItem>
          <Scroll type="button" id="Scroll" onClick={ScrollButton} />
        </BoardSearchItemWrapper>
      </Wrapper>
    );
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
        <HashButton>학사일정</HashButton>
        <HashButton>공지</HashButton>
        <HashButton
          type="button"
          id="EVENT"
          onClick={chageTypeButton}
          color={color.EVENT}
        >
          이벤트
        </HashButton>
        <HashButton
          type="button"
          id="RECRUIT"
          onClick={chageTypeButton}
          color={color.RECRUIT}
        >
          모집
        </HashButton>
        <HashButton>행사</HashButton>
        <HashButton
          type="button"
          id="동아리"
          onClick={chageTypeButton2}
          color={color.동아리}
        >
          동아리
        </HashButton>
      </HashButtonWrapper>
      <BoardSearchItemWrapper>
        <BoardSearchItem>
          {searchItem.length ? (
            searchItem.map((data) => (
              <BoardThumbnail
                link={`/board/${data.boardId}`}
                boardImageUrl={getMainPicture(data.imageUrls)}
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
  );
};

export default BoardSearch;
