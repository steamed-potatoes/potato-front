import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineAppstore,
  AiOutlineUnorderedList,
  AiOutlineUsergroupAdd,
  AiOutlineGift,
} from 'react-icons/ai';
import { RiCalendarCheckLine } from 'react-icons/ri';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const BoardCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 192px;
`;
const BoardCategoryTitle = styled.div`
  margin: 32px 0 8px 16px;

  display: block;
  font-size: 40px;
  font-weight: bold;
  &::after {
    content: '';
    padding-bottom: 12px;
    display: block;
    margin-left: 32px;
    width: 48px;
    border-bottom: solid #686868 2px;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Category = styled.a`
  cursor: pointer;
  width: 192px;
  height: 192px;
  margin: 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: none;
  &:hover {
    border: none;
    outline: none;
    background-color: #e8e8e9;
    border-radius: 32px;
  }
`;

const CategoryName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: -48px;
  color: black;
`;

const CategorySymbol = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 40px;
  background-color: #f1f3f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardCategory = () => {
  return (
    <BoardCategoryWrapper>
      <BoardCategoryTitle>Menu</BoardCategoryTitle>
      <Line>
        <Category>
          <CategorySymbol>
            <AiOutlineAppstore size="70" color="#172B4D" />
          </CategorySymbol>
          <CategoryName>전체보기</CategoryName>
        </Category>
        <Category>
          <CategorySymbol>
            <AiOutlineUnorderedList size="70" color="#172B4D" />
          </CategorySymbol>
          <CategoryName>학사일정</CategoryName>
        </Category>
        <Category>
          <CategorySymbol>
            <HiOutlineSpeakerphone size="70" color="#172B4D" />
          </CategorySymbol>
          <CategoryName>공지</CategoryName>
        </Category>
      </Line>
      <Line>
        <Category>
          <CategorySymbol>
            <AiOutlineGift size="70" color="#172B4D" />
          </CategorySymbol>
          <CategoryName>이벤트</CategoryName>
        </Category>
        <Category>
          <CategorySymbol>
            <AiOutlineUsergroupAdd size="70" color="#172B4D" />
          </CategorySymbol>
          <CategoryName>모집</CategoryName>
        </Category>
        <Category>
          <CategorySymbol>
            <RiCalendarCheckLine size="70" color="#172B4D" />
          </CategorySymbol>
          <CategoryName>행사</CategoryName>
        </Category>
      </Line>
    </BoardCategoryWrapper>
  );
};

export default BoardCategory;
