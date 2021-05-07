import React from 'react';
import styled from 'styled-components';

const MainCalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div``;

const MainCalenderTitle = styled.p`
  text-align: center;

  margin: 90px 0 0;

  font-size: 40px;
  font-weight: bold;
`;

const MainCalenderSubTitle = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 8px;
`;

const CalendersWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainCalender = styled.p`
  width: 600px;
  height: 560px;
  margin: 16px;

  background-color: gray;
`;

const SubCalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubCalender = styled.p`
  width: 320px;
  height: 280px;
  margin: 16px;

  background-color: gray;
`;

const SubCalenderDetail = styled.p`
  width: 320px;
  height: 200px;
  margin: 16px;

  background-color: gray;
`;

const Calender = () => {
  return (
    <MainCalenderWrapper>
      <TitleWrapper>
        <MainCalenderTitle>메인캘린더</MainCalenderTitle>
        <MainCalenderSubTitle>
          슬기로운 감자생활의 캘린더는 모든 일정들을 한 눈에 볼 수 있습니다
        </MainCalenderSubTitle>
        <MainCalenderSubTitle>
          중요한 일정을 픽하여 자신만의 일정을 완성하세요!
        </MainCalenderSubTitle>
      </TitleWrapper>
      <CalendersWrapper>
        <MainCalender>캘린더</MainCalender>
        <SubCalenderWrapper>
          <SubCalender>서브캘린더</SubCalender>
          <SubCalenderDetail>디테일</SubCalenderDetail>
        </SubCalenderWrapper>
      </CalendersWrapper>
    </MainCalenderWrapper>
  );
};

export default Calender;
