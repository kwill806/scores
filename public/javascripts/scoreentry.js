import React from 'react';
import ReactDOM from 'react-dom';

import ScoreEntryApp from './components/ScoreEntryApp';

const renderApp = async() => {
    const response = await fetch('/scores');
    const data = await response.json();

    ReactDOM.render(
        <ScoreEntryApp data={data}/>,
        document.getElementById('container')
    );
};

renderApp();
