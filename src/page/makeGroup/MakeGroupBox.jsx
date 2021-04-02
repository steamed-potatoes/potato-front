import React from 'react';
import styled from 'styled-components';
import GroupInput from './MakeGroupInput'
import Picture from './MakeGroupPicture'

const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  width: 1000px;
  height: 700px;
  margin: 16px auto;
  padding: 16px 32px 16px 32px;
  
  border: 0px solid #FFFFFF;
  border-radius: 48px;
  background-color: #FFFFFF;
  box-shadow: -16px 16px 3px 0px #CFCECE;
`

const SendButton = styled.button`
  margin-top: 15px;
  border: 0;
  background-color: #F0B138;
  width: 250px;
  padding: 8px;
  border-radius: 48px;
  color: white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    border: 1px solid #CFCECE;
  }
`

const MakeGroupBox = () => {
  return (
    <GroupBox>
      <Picture />
      <GroupInput />
      <SendButton>생성하기</SendButton> 
    </GroupBox>
  )
}
export default MakeGroupBox;