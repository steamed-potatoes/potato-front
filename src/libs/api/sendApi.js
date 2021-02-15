import api from './common';

export default {
  onTest: async (req) => {
    return await api.send('api/test', req, 'post');
  },
  sendToken: async (req) => {
    return await api.send(
      `api/v1/auth/google?code=${req.code}&redirectUri=${req.redirectUri}`,
      null,
      'get'
    );
  },
};
