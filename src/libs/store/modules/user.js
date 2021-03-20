const CHANGE_USER_INFO = 'user/CHANGE_USER_INFO';

export const changeUserInfo = (email, name, profileUrl) => ({
  type: CHANGE_USER_INFO,
  email,
  name,
  profileUrl,
});

const initialState = { email: '', name: '', profileUrl: '' };

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_INFO:
      return {
        email: action.email,
        name: action.name,
        profileUrl: action.profileUrl,
      };
    default:
      return state;
  }
}
