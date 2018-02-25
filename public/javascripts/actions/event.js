import ScoreActions from './score';

const ACTIONS = {
    TOGGLE_EVENT: 'TOGGLE_EVENT'
};

const ACTION_CREATORS = {
    toggleEvent(eventName) {
        return {
            type: ACTIONS.TOGGLE_EVENT,
            payload: {
                eventName
            }
        };
    },

    toggleEventAndSend(eventName) {
        return (dispatch) => {
            dispatch(ACTION_CREATORS.toggleEvent(eventName));
            dispatch(ScoreActions.submitScore());
        };
    }
};

export default {...ACTIONS, ...ACTION_CREATORS};
