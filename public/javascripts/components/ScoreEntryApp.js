import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

import Header from './Header/Header';
import ScoreEntryContainer from './ScoreEntry/ScoreEntryContainer';

export default class ScoreEntryApp extends Component {
    render() {
        return (
            <Provider store={createStore(reducer, applyMiddleware(thunk))}>
                <Grid>
                    <Header/>
                    <ScoreEntryContainer/>
                </Grid>
            </Provider>
        );
    }
}
