export const USER_TEST = 'user/TEST';

export const userTest = () => ({type: USER_TEST, id: 1});

const initialState = { test: 0 };

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_TEST:
      return {
        test: action.id
      }
    default:
      return state;
  }
}
