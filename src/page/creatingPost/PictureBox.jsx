import React, { useState } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { IoCameraOutline } from 'react-icons/io5';
// import { DEFAULT_PROFILE } from 'constant/defaultProfileIMG';
import LeftIcon from '../../images/LeftIcon.png';
import RightIcon from '../../images/RightIcon.png';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  align-items: center;
  height: 400px;
`;

const ImgDeleteBtn = styled.button`
  margin-top: 24px;
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
const ProfilePhoto = styled.img`
  background-color: #e2e2e2;
  height: 300px;
  width: 300px;
  border: 1px solid white;
`;
const InputPhoto = styled.input`
  display: none;
`;
const Label = styled.label`
  position: absolute;
  border-radius: 50px;
  right: 16px;
  bottom: 36px;
  z-index: 1;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.4);
    border: none;
  }
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: -24px;
`;

const LeftButton = styled.button`
  position: relative;
  right: -40px;
  color: #80808032;
  border-radius: 0 24px 24px 0;
  border: none;
  width: 40px;
  height: 40px;

  background-image: url(${LeftIcon});
  background-position: 35% 50%;
  background-repeat: no-repeat;
  background-size: 16px;
`;

const RightButton = styled.button`
  position: relative;
  left: -40px;
  float: right;

  color: #80808032;
  border-radius: 24px 0 0 24px;
  border: none;
  width: 40px;
  height: 40px;

  background-image: url(${RightIcon});
  background-position: 65% 50%;
  background-repeat: no-repeat;
  background-size: 16px;
`;

const PictureBox = ({ picturelUrl, setPicturelUrl }) => {
  const [imgCount, setImgCount] = useState(0);

  const onChange = async (e) => {
    try {
      if (e.target.files[0]) {
        const img = new FormData();
        img.append('file', e.target.files[0]);

        const { data: getImg } = await sendApi.postProfilePhoto(
          img,
          'BOARD_IMAGE'
        );
        const temp = picturelUrl.concat(getImg.data);
        setPicturelUrl(temp);
        alert('사진 추가');
        console.log('확인: ', temp);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onClickNextImg = () => {
    if (imgCount + 1 < picturelUrl.length) {
      setImgCount(imgCount + 1);
    }
  };

  const onClickPrevImg = () => {
    if (imgCount - 1 >= 0) {
      setImgCount(imgCount - 1);
    }
  };

  return (
    <Wrapper>
      {imgCount === 0 ? (
        <ProfilePhoto src="{DEFAULT_PROFILE}" />
      ) : (
        <ImgWrap>
          <LeftButton onClick={onClickPrevImg} />
          <ProfilePhoto src={picturelUrl[imgCount]} alt="게시글 사진" />
          <RightButton onClick={onClickNextImg} />
        </ImgWrap>
      )}

      <Label for="Photo">
        <IoCameraOutline size="56" />
      </Label>
      <InputPhoto
        type="file"
        id="profilePhoto"
        accept="image/*"
        onChange={onChange}
      />
      <ImgDeleteBtn>이미지 삭제</ImgDeleteBtn>
    </Wrapper>
  );
};

export default PictureBox;
