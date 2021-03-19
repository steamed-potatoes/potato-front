import React from 'react';
import styled from 'styled-components';

export const InputBox = ({
  handleChange
}) => {
  return (
    <div>
      <ChatText type="text" placeholder="입력해주세요" onChange={handleChange} />
    </div>
  );
};
const ChatText = styled.input`
  width : 800px;
  height : 24px;
  text-align : center;
`;