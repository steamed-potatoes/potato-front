import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import * as actions from 'libs/store/modules/signup';
import sendApi from 'libs/api/sendApi';
import localStorageService from 'libs/service/localStorageService';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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

const SignUpBox = styled.div`
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

const Profile = styled.img`
  width: 10rem;
  height: 10rem;
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

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { email, name, profileUrl } = useSelector((state) => state.signup);

  const requestSignUp = async () => {
    try {
      const { data } = await sendApi.signUpMember({ email, name, profileUrl });

      // TODO 상수로 빼기
      localStorageService.set('authToken', data.data);
      alert('회원가입 완료되었습니다.');
      history.push('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const onChangeName = (e) => {
    dispatch(actions.changeSignupInfo(email, e.target.value, profileUrl));
  };

  return (
    <Wrapper>
      <Profile src={profileUrl} />
      <InputBox
        type="text"
        placeholder="닉네임을 입력해주세요."
        value={name}
        onChange={onChangeName}
      />
      <SignUpBox onClick={requestSignUp}>회원가입</SignUpBox>
    </Wrapper>
  );
};

export default SignUp;
