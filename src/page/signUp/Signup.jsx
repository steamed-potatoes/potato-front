import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const SignUp = () => {
  return (
    <Wrapper>
      <div>
        <p>관리자</p>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div>
        <p>Sign up</p>
        <div>
          <p>닉네임</p>
          <input />
        </div>
        <div>
          <p>학과</p>
          <input />
        </div>
        <div>
          <p>학번</p>
          <input />
        </div>
        <button type="button">START</button>
      </div>
    </Wrapper>
  );
};

export default SignUp;
