import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import * as actions from 'store/modules/user';
import sendApi from 'apis/sendApi';
// import { useDispatch } from 'react-redux';

export const TextBox = () => {
  // 서버에서 받아온 값을 나중에 초기값으로 설정
  // const dispatch = useDispatch();

  const [myGroup, setMyGroup] = useState('디자인-온');

  // // 리덕스 상태가져옴
  // const { email, name, profileUrl } = useSelector((state) => ({
  //   email: state.user.email,
  //   name: state.user.name,
  //   profileUrl: state.user.profileUrl,
  // }));

  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 객체 가져오기
        const { data } = await sendApi.getMyProfile();

        // APi에서 데이터 비구조화
        const { email, name, major, classNumber } = data.data;

        setName(name);
        setMajor(major);
        setClassNumber(classNumber);
        setEmail(email);
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Field>
        <PTag>
          이름 :{' '}
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </PTag>
        <PTag>
          학과 :{' '}
          <Input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </PTag>
        <PTag>
          학번 :{' '}
          <Input
            type="text"
            value={classNumber}
            onChange={(e) => setClassNumber(e.target.value)}
          />
        </PTag>
        <PTag>
          이메일 :{' '}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </PTag>
        <hr />
        <PTag>
          소속 동아리 :{' '}
          <BoldInput
            type="text"
            value={myGroup}
            onChange={(e) => setMyGroup(e.target.value)}
          />
        </PTag>
      </Field>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 480px;
  margin-left: 50px;
`;
const Field = styled.form`
  width: 880px;
  margin-left: 100px;
`;

const Input = styled.input`
  font-size: 20px;
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
  font-size: 24px;
  margin-bottom: 32px;
  width: 400px;
  font-weight: bold;
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
  color: gray;
`;
