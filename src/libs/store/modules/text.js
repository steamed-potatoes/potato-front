export const INPUT = 'INPUT';

export const textTest = (text) => ({type: INPUT, content: text});

const initialState = { content: "" };

export default function text(state = initialState, action) {
  switch (action.type) {
    case INPUT:
      return {
        content: action.content
      }
    default:
      return state;
  }
}
