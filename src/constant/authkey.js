// const {
//   REACT_APP_CLIENT_ID,
//   REACT_APP_REDIRECT_URI,
//   REACT_APP_API_URI,
// } = process.env;

// export const AUTH_KEY = {
//   apiUrl: REACT_APP_API_URI,
//   google: {
//     clientId: REACT_APP_CLIENT_ID,
//     redirectUri: REACT_APP_REDIRECT_URI,
//   },
// };
export const AUTH_KEY = {
  apiUrl: 'https://api.pmarket.space',
  google: {
    clientId:
      '255834671273-ltk6qjer04jlr3bunfdn60ki66fe752n.apps.googleusercontent.com',
    redirectUri: 'http://localhost:3000/auth/google/callback',
  },
};
