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
  getBoard: async (lastId, type, req) => {
    return await api.get(
      `/api/v2/organization/board/list?size=12&lastOrganizationBoardId=${lastId}&type=${type}`,
      req,
      'get'
    );
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
  getBoardDetail: (id) => {
    return api.get(`/api/v2/organization/board?organizationBoardId=${id}`);
  },
  addComment: (req) => {
    return api.post(`/api/v2/board/comment`, req);
  },

  getCommentList: (id) => {
    return api.get(
      `/api/v2/board/comment/list?type=ORGANIZATION_BOARD&boardId=${id}`
    );
  },

  getUserProfile: (id) => {
    return api.get(`/api/v1/member/${id}`);
  },

  commentLike: (req) => {
    return api.post(`/api/v2/board/comment/like`, req);
  },

  commentUnLike: (id) => {
    return api.delete(`/api/v2/board/comment/like?boardCommentId=${id}`);
  },

  boardLike: (req) => {
    return api.post(`/api/v2/organization/board/like`, req);
  },

  boardUnLike: (id) => {
    return api.delete(
      `/api/v2/organization/board/like?organizationBoardId=${id}`
    );
  },
  getMyGroupList: () => {
    return api.get('/api/v1/organization/my');
  },
  getGroupDetail: (subDomain) => {
    return api.get(`/api/v1/organization/${subDomain}`);
  },
  getGroupBoard: (subDomain, lastId) => {
    return api.get(
      `/api/v2/organization/board/list/in/${subDomain}?size=8&lastOrganizationBoardId=${lastId}`
    );
  },
  postProfilePhoto: (req, type) => {
    return api.post(`/api/v1/upload?type=${type}`, req);
  },
  getAuthorGroup: (req) => {
    return api.get(`/api/v1/organization/${req}`);
  },
  postCreatingPost: (subDomain, req) => {
    return api.post(`/api/v2/organization/board/${subDomain}`, req);
  },
  getGroupList: () => {
    return api.get('/api/v1/organization/list?size=12');
  },

};
