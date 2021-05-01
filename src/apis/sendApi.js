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
  newBoardData: async () => {
    return await api.receivedNewBoard(
      'https://api.pmarket.space/api/v2/organization/board/list?size=5'
    );
  },
};
