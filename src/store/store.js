import { createStore } from "redux";
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';

const language = (state = javascript, action) => {
  if (action.type === 'JavaScript') {
    return javascript;
  }

  if (action.type === 'Python') {
    return python;
  }

  return state;
}

export const selectValue = (value) => {
  return ({
    type: value,
  });
};

export const store = createStore(language);