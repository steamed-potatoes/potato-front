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
import { MenuCategory } from 'components/menucategory/MenuCategory';

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

const BoardCategory = () => {
  return (
    <BoardCategoryWrapper>
      <BoardCategoryTitle>Menu</BoardCategoryTitle>
      <Line>
        <MenuCategory category="전체보기" link="/search">
          <AiOutlineAppstore size="70" color="#172B4D" />
        </MenuCategory>
        <MenuCategory category="학사일정" link="/search">
          <AiOutlineUnorderedList size="70" color="#172B4D" />
        </MenuCategory>
        <MenuCategory category="공지" link="/search">
          <HiOutlineSpeakerphone size="70" color="#172B4D" />
        </MenuCategory>
      </Line>
      <Line>
        <MenuCategory category="이벤트" link="/search">
          <AiOutlineGift size="70" color="#172B4D" />
        </MenuCategory>
        <MenuCategory category="모집" link="/search">
          <AiOutlineUsergroupAdd size="70" color="#172B4D" />
        </MenuCategory>
        <MenuCategory category="행사" link="/search">
          <RiCalendarCheckLine size="70" color="#172B4D" />
        </MenuCategory>
      </Line>
    </BoardCategoryWrapper>
  );
};

export default BoardCategory;
