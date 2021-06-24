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
  const [form, setForm] = useState({
    title: '',
    content: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    hashTags: [],
  });

  const [pictureUrl, setPictureUrl] = useState([]);
  const [postType, setPostType] = useState("RECRUIT");

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
  }, [pictureUrl]);

  
  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeHashtags = (e) => {
    const temp = e.target.value;
    const sliceArr = temp.split(', ');
    setForm({
      ...form,
      hashTags: sliceArr,
    });
  };

  const send = async () => {
    const start = form.startDate.concat('T', form.startTime);
    const end = form.endDate.concat('T',form.endTime);

    try{
      await sendApi.postCreatingPost(groupDomain,{
        title: form.title,
        content: form.content,
        imageUrlList: pictureUrl,
        startDateTime: start,
        endDateTime: end,
        type: postType,
        hashTags: form.hashTags,
      });
      swal('게시글이 추가되었습니다.');
      history.push('/Main');
    }catch (e) {
      swal(e.response.data.message);
    }
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
            onChangeHashtags={onChangeHashtags}
            setPostType={setPostType}
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
