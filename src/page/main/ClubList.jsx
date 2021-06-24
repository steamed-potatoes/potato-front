import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 524px;
  height: 136px;
  position: relative;
  border-top: solid #ededed 3px;
  &:last-child {
    border-bottom: solid #ededed 3px;
  }
`;
const ClubPicture = styled.img`
  background: #fafafa;
  border-radius: 24px;
  width: 104px;
  height: 104px;
  position: absolute;
  right: 8px;
`;
const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubName = styled.div`
  font-size: 24px;
`;

const ClubDesc = styled.div`
  font-size: 16px;
`;

const ClubList = ({ name, description, profileUrl }) => {
  return (
    <ListItem>
      <ClubInfo>
        <ClubName>{name}</ClubName>
        <ClubDesc>{description}</ClubDesc>
      </ClubInfo>
      <ClubPicture src={profileUrl} alt={name} />
    </ListItem>
  );
};

export default ClubList;
