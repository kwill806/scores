import Immutable from 'immutable';

import EventActions from '../actions/event';

const DEFAULT_STATE = Immutable.fromJS({
    Compulsary: false,
    Acro: false,
    Pyramid: false,
    Toss: false,
    Tumbling: false,
    Team: false
});

const score = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case EventActions.TOGGLE_EVENT:
        return DEFAULT_STATE.merge({
            [action.payload.eventName]: !state.get(action.payload.eventName)
        });
    default:
        return state;
    }
};

export default score;
