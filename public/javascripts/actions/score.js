const ACTIONS = {
    SET_SCORE: 'SET_SCORE'
};

const ACTION_CREATORS = {
    setScore(fieldName, value) {
        return {
            type: ACTIONS.SET_SCORE,
            payload: {
                fieldName,
                value
            }
        }
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
