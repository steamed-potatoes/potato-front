import api from './common';

export default {
  onTest: async (req) => {
    return await api.send('api/test', req, 'post');
  },
  sendGoogleAuth: async (req) => {
    return await api.send('api/v1/auth/google', req, 'post');
  },
};
