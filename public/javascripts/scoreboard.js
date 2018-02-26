import React from 'react';
import ReactDOM from 'react-dom';

import ScoreBoardApp from './components/ScoreBoardApp';

const poll = () => {
    setInterval(() => {
        renderApp();
    }, 100);
};

const renderApp = async() => {
    const response = await fetch('/scores');
    const data = await response.json();

    ReactDOM.render(
        <ScoreBoardApp data={data}/>,
        document.getElementById('container')
    );
};

renderApp();
poll();
