import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import { HeaderMenu } from 'components/header';
import BackgroundImg from '../../images/BackgroundImg.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${BackgroundImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 520px;
`;

const MainWrapper = styled.div`
  width: 80%;
  margin-top: 88px;
  border-radius: 24px;
  box-shadow: 4px 8px 8px 2px rgba(0, 0, 0, 0.26);
  padding: 56px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Writer = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

const WriterGroupImg = styled.img`
  background-color: gray;
  width: 40px;
  height: 40px;
  border-radius: 24px;
`;

const BoardMain = ({ match }) => {
  const { groupDomain } = match.params;
  const [authorGroup, setAuthorGroup] = useState(null);

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getAuthorGroup(groupDomain);
        console.log('1', data.data);
        setAuthorGroup(data.data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  console.log('d', authorGroup);
  if (authorGroup) {
    return (
      <Wrapper>
        <HeaderMenu />
        <MainWrapper>
          <Group>
            <WriterGroupImg
              src={authorGroup.organization.profileUrl}
              alt={authorGroup.organization.name}
            />
            <Writer>{authorGroup.organization.name}</Writer>
          </Group>
        </MainWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <HeaderMenu />
      <MainWrapper>Loading Weather...</MainWrapper>
    </Wrapper>
  );
};

export default BoardMain;
