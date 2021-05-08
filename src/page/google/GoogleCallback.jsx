import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import { useDispatch } from 'react-redux';
import * as actions from 'store/modules/user';
import sendApi from 'apis/sendApi';
import { AUTH_KEY } from 'constant';
import localStorageService from 'libs/localStorageService';
import { Loading } from 'components/Loading';

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
        history.push('/Main');
        return;
      }

      dispatch(actions.changeUserInfo(email, name, profileUrl));
      localStorageService.delete('authToken');
      history.push('/SignUp');
    } catch (error) {
      alert(error.response.data.message);
      history.push('/');
    }
  };

  useEffect(async () => {
    if (!window.location.search) {
      return;
    }
    const { code } = querystring.parse(window.location.search);

    sendToken(code);
  }, []);
  return <Loading />;
};

export default GoogleCallback;
