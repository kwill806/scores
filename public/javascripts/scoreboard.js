import React from 'react';
import ReactDOM from 'react-dom';

import ScoreBoardApp from './components/ScoreBoardApp';

const poll = () => {
    setInterval(() => {
        renderApp();
    }, 1000);
};

const renderApp = async() => {
    const response = await fetch('/scores');
    const scores = await response.json();

    ReactDOM.render(
        <ScoreBoardApp scores={scores}/>,
        document.getElementById('container')
    );
};

renderApp();
poll();
