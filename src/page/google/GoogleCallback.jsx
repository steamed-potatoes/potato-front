import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import { useDispatch } from 'react-redux';
import * as actions from 'store/modules/user';
import sendApi from 'apis/sendApi';
import { AUTH_KEY } from 'constant';
import localStorageService from 'libs/localStorageService';

const GoogleCallback = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sendToken = async (code) => {
    try {
      const { data } = await sendApi.sendGoogleAuth({
        code,
        redirectUri: AUTH_KEY.google.redirectUri,
      });

      const { email, name, profileUrl, token, type } = data.data;

      if (type === 'LOGIN') {
        // TODO 상수로 빼기
        localStorageService.set('authToken', token);
        history.push('/');
        return;
      }

      dispatch(actions.changeUserInfo(email, name, profileUrl));
      localStorageService.delete('authToken');
      history.push('/Signup');
    } catch (error) {
      alert(error.response.data.message);
      history.push('/Login');
    }
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
