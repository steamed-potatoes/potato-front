import React from 'react';
import styled from 'styled-components';

const CreateGroup = () => {
  return (
    <Wrapper>
      <TeamProfile />
      <InputBox type="text" placeholder="그룹의 이름을 입력해주세요." />
      <InputBox type="text" placeholder="그룹의 서브 도메인을 입력해주세요." />
      <InputBox type="text" placeholder="그룹을 설명해주세요." />
      <RegisterButton>등록하기</RegisterButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const TeamProfile = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 16rem;
  height: 16rem;
  margin: 3rem 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
  &: not(: hover) {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

const InputBox = styled.input`
  background: #fff;
  max-width: 320px;
  width: 80%;
  height: 24px;
  outline: none;
  margin: 0 10% 1rem 10%;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;

  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  max-width: 320px;
  width: 80%;
  height: 24px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 10% 3rem 10%;
  padding: 16px;
  cusor: pointer

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.5s;
  }
  &: not(: hover) {
    transform: scale(1);
    transition-duration: 0.5s;
  }
`;

export default CreateGroup;
