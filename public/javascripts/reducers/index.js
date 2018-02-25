import {combineReducers} from 'redux-immutable';

import score from '../reducers/score';
import event from '../reducers/event';

const reducer = combineReducers({score, event});

export default reducer;
