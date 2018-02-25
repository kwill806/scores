import React from 'react';
import ReactDOM from 'react-dom';

import ScoreEntryApp from './components/ScoreEntryApp';

const renderApp = () => {
    ReactDOM.render(
        <ScoreEntryApp/>,
        document.getElementById('container')
    );
};

renderApp();
