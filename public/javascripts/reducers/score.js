import Immutable from 'immutable';

import ScoreActions from '../actions/score';

const DEFAULT_STATE = new Immutable.Map();

const score = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case ScoreActions.SET_SCORE:
        return state.setIn(action.payload.fieldName.split('_'), {
            score: action.payload.value
        });
    default:
        return state;
    }
};

export default score;
