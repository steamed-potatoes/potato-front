import React, { useEffect } from 'react';
import querystring from 'querystring';
import sendApi from 'libs/api/sendApi';

const { REACT_APP_REDIRECT_URI } = process.env;

const GoogleCallback = () => {
  const sendToken = async (code) => {
    const { data } = await sendApi.sendToken({
      code,
      redirectUri: REACT_APP_REDIRECT_URI,
    });

    console.log(data);
    // TODO data로 넘어오는 응답 객체를 통해 회원가입 or 로그인을 진행해야 한다.
  };

  useEffect(async () => {
    if (!window.location.search) {
      return;
    }
    const { code } = querystring.parse(window.location.search);

    sendToken(code);
  }, []);
  return <div>Google Login</div>;
};

export default GoogleCallback;
