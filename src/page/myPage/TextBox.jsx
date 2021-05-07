import React,{ useState } from 'react';
import styled from 'styled-components';

export const TextBox = () => {
  // 서버에서 받아온 값을 나중에 초기값으로 설정

  const [nickName, setNickName] = useState('장뽀경');
  const [Name, setName] = useState('장보경');
  const [major, setMajor] = useState('시각디자인');
  const [classNumber, setClassNumber] = useState('201710083');
  const [email, setEmail] = useState('bigyou00@gmail.com');
  const [myGroup, setMyGroup] = useState('디자인-온');

  return (
    <Wrapper>
      <Field>
        <PTag>닉네임 : <BoldInput type="text" value={nickName} onChange={e=>setNickName(e.target.value)} /></PTag>
        <hr />
        <PTag>이름 : <Input type="text" value={Name} onChange={e=>setName(e.target.value)} /></PTag>
        <PTag>학과 : <Input type="text" value={major} onChange={e=>setMajor(e.target.value)} /></PTag>
        <PTag>학번 : <Input type="text" value={classNumber} onChange={e=>setClassNumber(e.target.value)} /></PTag>
        <PTag>이메일 : <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} /></PTag>
        <hr />
        <PTag>소속 동아리 : <BoldInput type="text" value={myGroup} onChange={e=>setMyGroup(e.target.value)} /></PTag>
      </Field>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 480px;
  margin-left : 50px;
`;
const Field = styled.form`
  width: 880px;
  margin-left : 100px;
`;

const Input = styled.input`
  font-size : 20px;
  margin-bottom: 32px;
  width: 400px;
  border: none;
  &:hover {
    border-bottom: 2px solid #808080;
  }
  &:focus {
    border-bottom: 2px solid #808080;
    outline: none;
  }
`;
const BoldInput = styled.input`
  font-size : 24px;
  margin-bottom: 32px;
  width: 400px;
  font-weight : bold;
  border: none;
  &:hover {
    border-bottom: 2px solid #808080;
  }
  &:focus {
    border-bottom: 2px solid #808080;
    outline: none;
  }
`;
const PTag = styled.p`
  color : gray;
`;
