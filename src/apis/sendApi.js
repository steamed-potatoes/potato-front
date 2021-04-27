import api from './common';

export default {
  onTest: async (req) => {
    return await api.send('/api/test', req, 'post');
  },
  sendGoogleAuth: async (req) => {
    return await api.send('/api/v1/auth/google', req, 'post');
  },
  signUpMember: async (req) => {
    return await api.send('/api/v1/member', req, 'post');
  },
  signUpMajor: async (req) => {
    return await api.send2('http://api.pmarket.space/api/v1/major/list',req);
  }
};
