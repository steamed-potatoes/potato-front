import React from 'react';
import { Result, Button } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const NotFound = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.goBack()}>
            Back
          </Button>
        }
      />
    </Wrapper>
  );
};
export default NotFound;
