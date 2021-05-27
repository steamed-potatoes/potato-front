import React, { useState } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { IoCameraOutline } from 'react-icons/io5';
import { DEFAULT_PROFILE } from 'constant/defaultProfileIMG';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  margin-left: 56px;
  align-items: center;
  height: 400px;
`;

const ImgDeleteBtn = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    transform: scale(1.3);
  }
`;
const ProfileImgText = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const ProfilePhoto = styled.img`
  border-radius: 400px;
  background-color: #e2e2e2;
  height: 300px;
  width: 300px;
  border: none;
`;
const InputPhoto = styled.input`
  display: none;
`;
const Label = styled.label`
  position: absolute;
  border: 1px solid black;
  border-radius: 50px;
  right: 10px;
  bottom: 64px;
  z-index: 1;
  transition: transform 0.5s;
  background: #e2e2e2;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

export const PhotoBox = () => {
  // 여기서 state를 받아야함
  const [photo, setPhoto] = useState(DEFAULT_PROFILE);

  const clickDeleteBtn = () => {
    setPhoto(DEFAULT_PROFILE); // dispatch사용할 공간
  };
  const onChange = async (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append('file', e.target.files[0]);
      try {
        const { data } = await sendApi.postProfilePhoto(img, 'MEMBER_PROFILE');
        setPhoto(data.data); // 이부분도 dispatch로
        alert('프로필 사진이 변경되었습니다.');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Wrapper>
      <ProfileImgText>프로필 이미지</ProfileImgText>
      <ProfilePhoto src={photo} alt="프로필 사진" />
      <Label for="profilePhoto">
        <IoCameraOutline size="60" />
      </Label>
      <InputPhoto
        type="file"
        id="profilePhoto"
        accept="image/*"
        onChange={onChange}
      />
      <ImgDeleteBtn onClick={clickDeleteBtn}>이미지 삭제</ImgDeleteBtn>
    </Wrapper>
  );
};
