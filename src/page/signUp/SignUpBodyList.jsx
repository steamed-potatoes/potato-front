import React from 'react';
import styled from 'styled-components';
import SignUpBodyInputSet from './SignUpBodyInputSet';


const InputList = styled.div`
  align-items: left;

  margin: 16px;
`;

const SignUpBodyList = () => {
  return (
    <InputList>
      {/* <SignUpBodyInputSet name="닉네임" /> */}
      <SignUpBodyInputSet />
      {/* <SignUpBodyInputSet name="학번" /> */}
    </InputList>
  );
}

export default SignUpBodyList;