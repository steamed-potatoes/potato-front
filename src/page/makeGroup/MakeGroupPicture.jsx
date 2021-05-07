import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``

const Picture = styled.img`
  border-radius: 400px;
  background-color: #E2E2E2;
  height: 150px;
  width: 150px;
  margin-top: 16px;
  border:1px solid black;
`

const PictureWrapper = styled.div`
  height: 150px;
  width: 150px;
  margin: 16px;
  margin-left: auto;
  margin-right: auto;
`

const InputPicture = styled.input`
  display: none;
`

const Change = styled.button`
  background-color: #F0B138;
  border: 0;
  border-radius: 48px;
  width: 180px;
  color: white;
  margin: 8px;
  font-size: 16px;
  padding: 4px;
  &:hover {
    cursor: pointer;
    border: 1px solid #CFCECE;
  }
`

const MakeGroupPicture = ({onChangeForm}) => {
  const [file, setFile] = useState(null);
  const inputFiled = useRef(null);

  const onChangeFile = (event) => {
    const [imageFile] = event.target.files;
    const imageUrl = URL.createObjectURL(imageFile);
    setFile(imageUrl);
    onChangeForm(event); 
  }

  const onClickInput = () => {
    inputFiled.current.click();
  }

  return (
    <Wrapper>
      <PictureWrapper>
        <Picture src={file} />
      </PictureWrapper>
      <InputPicture type="file" name="profileUrl" ref={inputFiled} onChange={onChangeFile} />
      <Change onClick={onClickInput}>사진 수정</Change>
    </Wrapper>
	);
}

export default MakeGroupPicture;