
import type { Action } from '../actions/types';
import { SET_INDEX } from '../actions/list';

export type State = {
    questions: Object
}

// TODO: Load initial state from storage
const initialState = {

  /**
   * questions are a list of objects containing the question
   * @type {Array}
   */
  questions: [
    {
      id: 1,
      value: 'Are you stuffy today?'
    },
    {
      id: 2,
      value: 'Are you stressed about work?'
    },
    {
      id: 3,
      value: 'Did you climb stairs today?'
    },
    {
      id: 4,
      value: 'Did you meditate today?'
    },
  ],

  /**
   * Responses are a dictionary of lists
   * Key is the question id, value is the list of responses for that question
   * @type {Object}
   */
  responses: {
    1: [
      {
        time: 1492146179105,
        value: true
      },
      {
        time: 1492146187141,
        value: false
      }
    ],
    2: [
      {
        time: 1492146179105,
        value: true
      },
      {
        time: 1492146187141,
        value: false
      }
    ]
  },
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
