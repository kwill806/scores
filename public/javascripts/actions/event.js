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
    }
};

export default {...ACTIONS, ...ACTION_CREATORS};
