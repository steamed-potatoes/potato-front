const CHANGE_CONTENT = 'board/CHANGE_CONTENT';

export const changeContent = (content) => ({
  type: CHANGE_CONTENT,
  content,
});

const initialState = { content: '' };

export default function board(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CONTENT:
      return {
        content: action.content,
      };
    default:
      return state;
  }
}
