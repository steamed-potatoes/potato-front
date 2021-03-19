export const BOARD_SET = 'board/SET';

export const boardSet = (text) => ({type: BOARD_SET, text});

const initialState = { content: '' };

export default function board(state = initialState, action) {
  switch (action.type) {
    case BOARD_SET:
      return {
        content: action.text,
      }
    default:
      return state;
  }
}
