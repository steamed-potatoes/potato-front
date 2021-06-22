import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import { HeaderMenu } from 'components/header';
import BackgroundImg from '../../images/BackgroundImg.png';
import PostingForm from './PostingForm';

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
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SendButton = styled.button`
  margin-top: 16px;
  margin-left: 16px;
  border: 0;
  background-color: #f0b138;
  width: 104px;
  padding: 8px;
  border-radius: 48px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    border: 1px solid #cfcece;
  }
`;

const CreatingPost = ({ match }) => {
  const { groupDomain } = match.params;
  const [authorGroup, setAuthorGroup] = useState(null);
  const [writer, setWriter] = useState(null);
  const history = useHistory();
  // RECRUIT, EVENT
  const [form, setForm] = useState({
    title: '',
    content: '',
    startDateTime: '',
    endDateTime: '',
    type: '',
    hashTags: [],
  });

  const [pictureUrl, setPictureUrl] = useState([]);

  useEffect(() => {
    const receivedGroupData = async () => {
      try {
        const { data } = await sendApi.getAuthorGroup(groupDomain);
        setAuthorGroup(data.data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    const receivedWriterData = async () => {
      try {
        const { data } = await sendApi.getMyProfile();
        setWriter(data.data);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    };
    receivedGroupData();
    receivedWriterData();
  }, []);

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const send = async (form, pictureUrl) => {
    swal('form send:');
    const sendData = {
      title: form.title,
      content: form.content,
      imageUrlList: pictureUrl,
      startDateTime: form.startDateTime,
      endDateTime: form.endDateTime,
      type: form.type,
      hashTags: form.hashTags,
    };
    console.log('send:', sendData);
    history.push('/Main');
  };

  const cancel = () => {
    swal('작성취소');
    history.push('/Main');
  };

  if (authorGroup && writer) {
    return (
      <Wrapper>
        <HeaderMenu />
        <MainWrapper>
          <Group>
            <WriterGroupImg
              src={authorGroup.organization.profileUrl}
              alt={authorGroup.organization.name}
            />
            <Writer>
              {authorGroup.organization.name}({writer.name})
            </Writer>
          </Group>
          <PostingForm
            onChangeForm={onChangeForm}
            setPictureUrl={setPictureUrl}
            pictureUrl={pictureUrl}
          />
          <ButtonWrap>
            <SendButton onClick={() => send(form, pictureUrl)}>
              게시글 작성
            </SendButton>
            <SendButton onClick={() => cancel()}>작성 취소</SendButton>
          </ButtonWrap>
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

export default CreatingPost;
