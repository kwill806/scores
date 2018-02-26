import Immutable from 'immutable';

import ScoreActions from '../actions/score';

const DEFAULT_STATE = new Immutable.Map();

const score = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case ScoreActions.SET_SCORE:
        return state.mergeIn(action.payload.fieldName.split('_'), Immutable.fromJS({
            score: parseFloat(action.payload.value)
        }));
    case ScoreActions.SHOW_SCORE:
        return state.mergeIn(action.payload.fieldName.split('_'), Immutable.fromJS({
            show: true
        }));
    default:
        return state;
    }
};

export default score;
