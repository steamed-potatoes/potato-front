import React, { useEffect } from 'react';
import querystring from 'querystring';
import sendApi from 'libs/api/sendApi';
import config from 'config';

const GoogleCallback = () => {
  const sendToken = async (code) => {
    const { data } = await sendApi.sendGoogleAuth({
      code,
      redirectUri: config.google.redirectUri,
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
