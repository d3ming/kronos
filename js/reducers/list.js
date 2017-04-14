
import type { Action } from '../actions/types';
import { SET_INDEX } from '../actions/list';

export type State = {
    questions: string
}

const initialState = {
  questions: [
    'Are you stuffy today?',
    'Are you stressed about work?',
    'Did you climb stairs today?',
    'Did you meditate today?'
  ],
  selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  return state;
}
