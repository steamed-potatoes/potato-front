import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 136px;
  position: relative;
  width: 524px;
  list-style: none;
`;
const ClubPicture = styled.img`
  background: gray;
  width: 109px;
  height: 109px;
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

const ClubList = ({ itemData: { name, description, profileUrl } }) => {
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
