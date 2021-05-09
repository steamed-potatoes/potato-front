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
  newBoardData: async (req) => {
    return await api.send('/api/v2/organization/board/list?size=5', req, 'get');
  },
  getMajors: async (req) => {
    return await api.send('/api/v1/major/list', req, 'get');
  },
  makeGroup: async (req) => {
    return await api.sendAuth('/api/v1/organization', req, 'post');
  },
  getNewGroupList: async (req) => {
    return await api.send('/api/v1/organization/list?size=3', req, 'get');
  },
  getMyInfo: async (req) => {
    return await api.sendAuth('/api/v1/member', req, 'get');
  },
};
