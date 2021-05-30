import React from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { IoCameraOutline } from 'react-icons/io5';
import { DEFAULT_PROFILE } from 'constant/defaultProfileIMG';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'store/modules/user';

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
  border: 2px solid black;
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
  // const { profileUrl } = useSelector((state) => ({
  //   profileUrl: state.user.profileUrl,
  // }));
  const { profileUrl, name, major, classNumber } = useSelector((state) => ({
    profileUrl: state.user.profileUrl,
    name: state.user.name,
    major: state.user.major,
    classNumber: state.user.classNumber,
  }));
  const dispatch = useDispatch();
  const clickDeleteBtn = () => {
    dispatch(actions.changeUserProfilePhoto(DEFAULT_PROFILE));
  };

  const onChange = async (e) => {
    try {
      if (e.target.files[0]) {
        const img = new FormData();
        img.append('file', e.target.files[0]);

        const { data } = await sendApi.postProfilePhoto(img, 'MEMBER_PROFILE');
        dispatch(actions.changeUserProfilePhoto(data.data));
        await sendApi.putMyProfile({
          name,
          profileUrl,
          major,
          classNumber,
        });
        alert('프로필 사진이 변경되었습니다.');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <ProfileImgText>프로필 이미지</ProfileImgText>
      <ProfilePhoto src={profileUrl} alt="프로필 사진" />
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
