import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``

const Picture = styled.img`
  border-radius: 400px;
  background-color: yellow;
`

const PictureWrapper = styled.div`
  background-color: #E2E2E2;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
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

const MakeGroupPicture = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
      <Change>사진 수정</Change>  
    </Wrapper>
	)
}

export default MakeGroupPicture;