const ACTIONS = {
    SET_SCORE: 'SET_SCORE',
    SHOW_SCORE: 'SHOW_SCORE'
};

const ACTION_CREATORS = {
    setScore(fieldName, value) {
        return {
            type: ACTIONS.SET_SCORE,
            payload: {
                fieldName,
                value
            }
        };
    },

    showScore(fieldName) {
        return {
            type: ACTIONS.SHOW_SCORE,
            payload: {
                fieldName
            }
        };
    },

    showScoreAndSend(fieldName) {
        return (dispatch) => {
            dispatch(ACTION_CREATORS.showScore(fieldName));
            dispatch(ACTION_CREATORS.submitScore());
        };
    },

    submitScore() {
        return (dispatch, getState) => {
            return fetch('/scores', {
                body: JSON.stringify(getState().toJS()),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });
        };
    }
};

export default {...ACTIONS, ...ACTION_CREATORS};
