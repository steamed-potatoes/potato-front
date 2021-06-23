import React, { useState } from 'react';
import styled from 'styled-components';

const HashButtonWrapper = styled.div`
  align-items: left;
  justify-content: flex-start;
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

const TypeButton = ({setPostType}) => {
  const [color, setColor] = useState({
    학사일정: 'white',
    공지: 'white',
    EVENT: 'white',
    RECRUIT: 'white',
    행사: 'white',
    동아리: 'white',
  });

  const recruitTypeButton = (e) => {
    setColor({
      [e.target.id]: '#F0B138',
    });
    setPostType("RECRUIT");
  };

  const eventTypeButton = (e) => {
    setColor({
      [e.target.id]: '#F0B138',
    });
    setPostType("EVENT");
  };

  return (
    <HashButtonWrapper>
      <HashButton>학사일정</HashButton>
      <HashButton>공지</HashButton>
      <HashButton
        type="button"
        id="EVENT"
        onClick={eventTypeButton}
        color={color.EVENT}
      >
        이벤트
      </HashButton>
      <HashButton
        type="button"
        id="RECRUIT"
        onClick={recruitTypeButton}
        color={color.RECRUIT}
      >
        모집
      </HashButton>
      <HashButton>행사</HashButton>
      <HashButton>동아리</HashButton>
    </HashButtonWrapper>
  );
};

export default TypeButton;
