import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Login = () => {

  return (
    <Wrapper>
      <div>
        <p>관리자</p>
        <ul>
          <li>Home</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <p>슬기로운 감자생활</p>
        <p>이용하시려면 하단의 아이디로 로그인 하기를 클릭 하세오</p>
        <div>
          <p>이미지</p>
          <button type="button">구글 아이디로 시작하기</button>
          <p>화살표</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
