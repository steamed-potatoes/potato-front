import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import swal from 'sweetalert';
import sendApi from '../../apis/sendApi';
import GroupInput from './MakeGroupInput';
import Picture from './MakeGroupPicture';

const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 1000px;
  height: 700px;
  margin: 16px auto;
  padding: 16px 32px 16px 32px;

  border: 0px solid #ffffff;
  border-radius: 48px;
  background-color: #ffffff;
  box-shadow: -16px 16px 3px 0px #cfcece;
`;

const SendButton = styled.button`
  margin-top: 15px;
  border: 0;
  background-color: #f0b138;
  width: 250px;
  padding: 8px;
  border-radius: 48px;
  color: white;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    border: 1px solid #cfcece;
  }
`;

const MakeGroupBox = () => {
  const history = useHistory();

  const [form, setForm] = useState({
    subDomain: '',
    name: '',
    description: '',
  });
  const [pictureUrl, setPictureUrl] = useState('');

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePicture = async (e) => {
    try {
      if (e.target.files[0]) {
        const img = new FormData();
        img.append('file', e.target.files[0]);
        const { data:getImg } = await sendApi.postProfilePhoto(
          img,
          'ORGANIZATION_PROFILE'
        );
        setPictureUrl(getImg.data);
        alert('그룹 사진이 추가되었습니다.');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
    
  };

  const makeGroup = async (form) => {
    try {
      await sendApi.makeGroup({
        subDomain: form.subDomain,
        name: form.name,
        description: form.description,
        profileUrl: pictureUrl,
      });
      swal('새로운 그룹이 개설되었습니다.');
      history.push('/Main');
    } catch (e) {
      swal(e.response.data.message);
    }
  };

  return (
    <GroupBox>
      <Picture onChangePicture={onChangePicture} pictureUrl={pictureUrl} />
      <GroupInput onChangeForm={onChangeForm} />
      <SendButton onClick={() => makeGroup(form)}>생성하기</SendButton>
    </GroupBox>
  );
};
export default MakeGroupBox;
