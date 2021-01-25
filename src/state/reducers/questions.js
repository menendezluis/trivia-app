import { actions } from '../actions/questions';

// Using a zip list to store questions.
const initialState = {
  answered: [],
  current: null,
  remaining: [],
};

const shiftLeft = (state, mergeToShifted) => ({
  answered: [
    ...state.answered,
    ...(state.current ? [{ ...state.current, ...mergeToShifted }] : []),
  ],
  current: state.remaining[0],
  remaining: state.remaining.slice(1),
});

class Reducer {
  static reduce(state = initialState, action) {
    if (Reducer[action.type]) {
      return Reducer[action.type](state, action);
    }

    return state;
  }

  static [actions.FETCH_QUESTIONS_SUCCESS](state, action) {
    return shiftLeft({ ...initialState, remaining: action.payload });
  }

  static [actions.ANSWER_FALSE](state, action) {
    return shiftLeft(state, { answer: false });
  }

  static [actions.ANSWER_TRUE](state, action) {
    return shiftLeft(state, { answer: true });
  }
}

export const reducer = Reducer.reduce;
