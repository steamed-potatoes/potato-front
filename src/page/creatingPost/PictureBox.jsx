import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sendApi from 'apis/sendApi';
import { IoCameraOutline } from 'react-icons/io5';
import LeftIcon from '../../images/LeftIcon.png';
import RightIcon from '../../images/RightIcon.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

const BoardPhoto = styled.img`
  background-color: white;
  height: 300px;
  width: 300px;
  border: 1px solid white;
  object-fit:contain;
`;
const BoardPhotoNone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 380px;
  background-color: #e2e2e2;
`;

const PhotoAddWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height:80px;
`

const InputPhoto = styled.input`
  display: none;
`;
const NoneLabel = styled.label`
  border-radius: 50px;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.4);
    border: none;
  }
`;

const Label = styled.label`
  border-radius: 50px;
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

const PictureBox = ({ pictureUrl, setPictureUrl }) => {
  const [imgCount, setImgCount] = useState(0);

  useEffect(()=>{
    console.log('다시 그림:', pictureUrl[imgCount]);
  },)
  
  const onChange = async (e) => {
    try {
      if (e.target.files[0]) {
        const img = new FormData();
        img.append('file', e.target.files[0]);

        const { data: getImg } = await sendApi.postProfilePhoto(
          img,
          'BOARD_IMAGE'
        );
        console.log('확인: ', getImg.data);
        const temp = pictureUrl.concat(getImg.data);
        console.log('확인2: ', temp);
        setPictureUrl(temp);

        
        alert('사진 추가');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onClickNextImg = () => {
    if (imgCount + 1 < pictureUrl.length) {
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
      {pictureUrl.length === 0 ? (
        <BoardPhotoNone>카메라 아이콘을 눌러 사진을 추가하세요</BoardPhotoNone>
      ) : (
        <ImgWrap>
          <LeftButton onClick={onClickPrevImg} />
          <BoardPhoto src={pictureUrl[imgCount]} alt='게시글 사진' />
          <RightButton onClick={onClickNextImg} />
        </ImgWrap>
      )}
      <PhotoAddWrap>
        { pictureUrl.length === 0 ? (
          <NoneLabel for="boardPhoto">
            <IoCameraOutline size="56" />
          </NoneLabel>
        ):(
          <Label for="boardPhoto">
            <IoCameraOutline size="56" />
          </Label>
        )}
        
        <InputPhoto
          type="file"
          id="boardPhoto"
          accept="image/*"
          onChange={onChange}
        />
      </PhotoAddWrap>
    </Wrapper>
  );
};

export default PictureBox;
