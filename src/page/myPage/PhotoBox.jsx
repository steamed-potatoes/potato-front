import React from 'react';
import styled from 'styled-components';
import {IoPersonCircleOutline,IoCameraOutline} from 'react-icons/io5'

const PhotoBox = () => {
  return (
    <Wrapper>
      <ProfileImgText>프로필 이미지</ProfileImgText>
      <IoPersonCircleOutline size="400" />
      <CameraBtn>
        <IoCameraOutline size="56" />
      </CameraBtn>
      <ImgDeleteBtn>이미지 삭제</ImgDeleteBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display : flex;
  flex-flow : column;
  position: relative;
  margin-left : 56px;
  align-items : center;
  height: 400px;
`;
const CameraBtn = styled.button`
  position: absolute;
  border: none;
  border-radius : 50px;
  right: 64px;
  bottom: 32px;
  z-index: 1;
  transition: transform 0.5s;

  &:hover{
    cursor: pointer;
    transform: scale(1.3);
  }
`;
const ImgDeleteBtn = styled.button`
  border: none;
  margin-top: 30px;
  background : none;
  font-size : 18px;
  margin-top : -20px;
  transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    font-weight:bold;
    transform: scale(1.3);
  }
`;
const ProfileImgText = styled.div`
  font-size : 28px;
  margin-bottom : -10px;
`;

export default PhotoBox;