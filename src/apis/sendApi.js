import api from './common';

export default {
  sendGoogleAuth: (req) => {
    return api.post('/api/v1/auth/google', req);
  },
  signUpMember: (req) => {
    return api.post('/api/v1/member', req);
  },
  newBoardData: () => {
    return api.get(
      '/api/v2/organization/board/list?size=5&lastOrganizationBoardId=0'
    );
  },
  getMajors: () => {
    return api.get('/api/v1/major/list');
  },
  makeGroup: (req) => {
    return api.post('/api/v1/organization', req);
  },
  getNewGroupList: () => {
    return api.get('/api/v1/organization/list?size=3');
  },
  getMyProfile: () => {
    return api.get('/api/v1/member');
  },
  putMyProfile: (req) => {
    return api.put('/api/v1/member', req);
  },
  retrievePopluarBoards: (size) => {
    return api.get(`/api/v1/organization/list/popular?size=${size}`);
  },
  retrieveIntermissionlessBoards: (size, datetime) => {
    return api.get(
      `/api/v2/organization/board/list/imminentBoards?size=${size}&dateTime=${datetime}`
    );
  },
  getMyGroupList: () => {
    return api.get('/api/v1/organization/my');
  },
  postProfilePhoto: (req, type) => {
    return api.post(`/api/v1/upload'?type=${type}`, req);
  },
};
