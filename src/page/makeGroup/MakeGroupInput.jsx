import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``

const TagName = styled.p`
  font-size: 16px;
  margin-top: 24px;
`

const InputName = styled.input`
  background-color: #E2E2E2;
  border-radius: 48px;
  width: 600px;
  height: 0px;
  border: 0;
  padding: 24px;
`

const Textarea = styled.textarea`
  background-color: #E2E2E2;
  border-radius: 30px;
  width: 600px;
  height: 100px;
  border: 0;
  resize: none;
  padding: 24px;
`

const MakeGroupInput = ({onChangeForm}) => {
  return (
    <Wrapper>
      <TagName>도메인주소</TagName>
      <InputName name="subDomain" onChange={onChangeForm} />
      <TagName>그룹 이름</TagName>
      <InputName name="name" onchange={onChangeForm} />
      <TagName>그룹 소개</TagName>
      <Textarea name="description" onChange={onChangeForm} />
    </Wrapper>
  )
}

export default MakeGroupInput