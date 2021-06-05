import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from 'images/BackgroundImg.png';
import { HeaderMenu } from 'components/header';
import swal from 'sweetalert';
import sendApi from 'apis/sendApi';
import {useLocation} from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 520px;
  float: left;
`;
const DetailWrapper = styled.div`
  margin: 84px 324px 0px 324px;
`

const Picture = styled.img`
  border-radius: 400px;
  background-color: #e2e2e2;
  height: 150px;
  width: 150px;
  margin-top: 16px;
  border: 1px solid black;
  margin-left: 60px;
  margin-bottom: 92px;
`;



const GroupDetail = () => {
  const [group, setGroup] = useState();
  const location = useLocation();
  const subDomain = [location.state.subDomain];
  
  useEffect(() => {
    const receivedData = async () => {
      try{
        const { data } = await sendApi.getGroupDetail(subDomain);
        setGroup(data.data);
        console.log(group);
      } catch (e) {
        swal(`${e.response.data.message}`);
      }
    }
    receivedData();
  }, []);

  return (
    <Wrapper>
      <HeaderMenu />
      <DetailWrapper>
        <Picture />
      </DetailWrapper>
    </Wrapper>
  );
};

export default GroupDetail;