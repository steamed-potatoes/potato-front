import React,{ useState } from 'react';
import styled from 'styled-components';

const TextBox = () => {
  // 서버에서 받아온 값을 나중에 초기값으로 설정

  const [nickName, setNickName] = useState('장뽀경');
  const [Name, setName] = useState('장보경');
  const [major, setMajor] = useState('시각디자인');
  const [classNumber, setClassNumber] = useState('201710083');
  const [email, setEmail] = useState('bigyou00@gmail.com');
  const [myGroup, setMyGroup] = useState('디자인-온');

  const onChange1 = (e) =>{
    setNickName(e.target.value)
  }
  const onChange2 = (e) =>{
    setName(e.target.value)
  }
  const onChange3 = (e) =>{
    setMajor(e.target.value)
  }
  const onChange4 = (e) =>{
    setClassNumber(e.target.value)
  }
  const onChange5 = (e) =>{
    setEmail(e.target.value)
  }
  const onChange6 = (e) =>{
    setMyGroup(e.target.value)
  }

  return (
    <Wrapper>
      <Field>
        <PTag>닉네임 : <BoldInput type="text" value={nickName} onChange={onChange1} /></PTag>
        <hr />
        <PTag>이름 : <Input type="text" value={Name} onChange={onChange2} /></PTag>
        <PTag>학과 : <Input type="text" value={major} onChange={onChange3} /></PTag>
        <PTag>학번 : <Input type="text" value={classNumber} onChange={onChange4} /></PTag>
        <PTag>이메일 : <Input type="email" value={email} onChange={onChange5} /></PTag>
        <hr />
        <PTag>소속 동아리 : <BoldInput type="text" value={myGroup} onChange={onChange6} /></PTag>
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


export default TextBox;