import { DEFAULT_PROFILE } from 'constant/defaultProfileIMG';

const CHANGE_USER_INFO = 'user/CHANGE_USER_INFO';
const CHANGE_USER_DETAIL_INFO = 'user/CHANGE_USER_DETAIL_INFO';
const CHANGE_USER_PROFILE_PHOTO = 'user/CHANGE_USER_PROFILE_PHOTO';

export const changeUserInfo = (email, name, profileUrl) => {
  return {
    type: CHANGE_USER_INFO,
    email,
    name,
    profileUrl,
  };
};

export const changeUserDetailInfo = (major, classNumber) => ({
  type: CHANGE_USER_DETAIL_INFO,
  major,
  classNumber,
});

export const changeUserProfilePhoto = (profileUrl) => ({
  type: CHANGE_USER_PROFILE_PHOTO,
  profileUrl,
});

const initialState = {
  email: '',
  name: '',
  profileUrl: DEFAULT_PROFILE,
  major: '',
  classNumber: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_INFO:
      return {
        email: action.email,
        name: action.name,
        profileUrl: action.profileUrl,
      };
    case CHANGE_USER_PROFILE_PHOTO:
      return {
        profileUrl: action.profileUrl,
      };
    case CHANGE_USER_DETAIL_INFO:
      return {
        major: action.major,
        classNumber: action.classNumber,
      };

    default:
      return state;
  }
}
