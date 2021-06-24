import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from 'images/BackgroundImg.png';
import { HeaderMenu } from 'components/header';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import { useLocation, useHistory } from 'react-router-dom';
import { BoardThumbnail } from 'components/BoardThumbnail';
import { getMainPicture } from 'utils/getMainPicture';
import ScrollImg from 'images/ScrollImg.png';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 520px;
  float: left;
`;

const DetailWrapper = styled.div`
  margin: 84px 324px 0px 324px;
`;

const Picture = styled.img`
  border-radius: 400px;
  background-color: #e2e2e2;
  height: 150px;
  width: 150px;
  margin-top: 16px;
  border: 1px solid black;
  margin-left: 60px;
  margin-bottom: 92px;
`;

const GroupName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const GroupDescription = styled.p`
  margin: 16px;
`;

const BoardSearchItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  float: left;
`;

const BoardSearchItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ItemDetail = styled.div`
  height: 100%;
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

const DiscriptionWrapper = styled.div``;

const LeftWrapper = styled.div`
  display: flex;
  float: left;
  margin-right: 64px;
`;

const RightWrpper = styled.div`
  padding: 32px;
`;

const Button = styled.button`
  float: right;
  background: #f0b138;
  border-radius: 40px;
  width: 160px;
  height: 56px;
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

const GroupDetail = () => {
  const [group, setGroup] = useState({});
  const [searchItem, setSearchItem] = useState([]);
  const [lastId, setLastId] = useState('0');
  const [member, setMember] = useState([]);
  const location = useLocation();
  const subDomain = [location.state.subDomain];
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const receivedData = async () => {
      try {
        const { data } = await sendApi.getGroupDetail(subDomain);
        setGroup(data.data.organization);
        setMember(data.data.members);
        const { data: getMyProfile } = await sendApi.getMyProfile();
        const { email: getEmail } = getMyProfile.data;
        setEmail(getEmail);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        const { data } = await sendApi.getGroupBoard(subDomain, lastId);
        setSearchItem(data.data);
        setLastId(data.data[data.data.length - 1].boardId);
      } catch (e) {
        swal(e);
      }
    };
    saveData();
  }, [group]);

  const ButtonClick = () => {
    if (member[0].email === email) {
      let url = '/CreatingPost/';
      url += subDomain;
      history.push({
        pathname: url,
      });
    } else {
      swal('권한이 없습니다.');
    }
  };

  const ScrollButton = async () => {
    try {
      const { data } = await sendApi.getGroupBoard(subDomain, lastId);
      if (data.length !== 0) {
        setSearchItem(searchItem.concat(data.data));
        setLastId(data.data[data.data.length - 1].boardId);
      }
    } catch (e) {
      document.getElementById('Scroll').style.display = 'none';
    }
  };

  return (
    <Wrapper>
      <HeaderMenu />
      <DetailWrapper>
        <DiscriptionWrapper>
          <LeftWrapper>
            <Picture src={group.profileUrl} />
          </LeftWrapper>
          <RightWrpper>
            <GroupName>{group.name}</GroupName>
            <GroupDescription>{group.description}</GroupDescription>
            <Button onClick={ButtonClick}>게시글 작성</Button>
          </RightWrpper>
        </DiscriptionWrapper>
        <BoardSearchItemWrapper>
          <BoardSearchItem>
            {searchItem.length ? (
              searchItem.map((data) => (
                <BoardThumbnail
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
          {searchItem.length ? (
            <Scroll type="button" id="Scroll" onClick={ScrollButton} />
          ) : (
            <div />
          )}
        </BoardSearchItemWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

export default GroupDetail;
