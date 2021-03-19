const CHANGE_SIGNUP_INFO = 'signup/CHANGE_SIGNUP_INFO';

export const changeSignupInfo = (email, name, profileUrl) => ({
  type: CHANGE_SIGNUP_INFO,
  email,
  name,
  profileUrl,
});

const initialState = { email: '', name: '', profileUrl: '' };

export default function signup(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNUP_INFO:
      return {
        email: action.email,
        name: action.name,
        profileUrl: action.profileUrl,
      };
    default:
      return state;
  }
}
