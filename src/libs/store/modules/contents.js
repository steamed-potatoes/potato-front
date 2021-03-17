export const SET_CONTENTS = 'contents/SET';

export const setContents = (data) => ({ type: SET_CONTENTS, data });

const initialState = { inputContents: '' };

export default function content(state = initialState, action) {
  switch (action.type) {
    case SET_CONTENTS:
      return {
        inputContents: action.data,
      };
    default:
      return state;
  }
}
