const {
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_API_URI,
} = process.env;

export const AUTH_KEY = {
  apiUrl: REACT_APP_API_URI,
  google: {
    clientId: REACT_APP_CLIENT_ID,
    redirectUri: REACT_APP_REDIRECT_URI,
  },
};
