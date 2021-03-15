export const USER_TEST = 'user/TEST';

export const userTest = () => ({type: USER_TEST, id: 1});

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_TEST:
      return {
        ...state,
        test: action.id
      }
    default:
      return state;
  }
}
