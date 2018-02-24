import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux-immutable';

import score from '../reducers/score';
import event from '../reducers/event';

import Header from './Header/Header';
import ScoreEntryContainer from './ScoreEntry/ScoreEntryContainer';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(combineReducers({score, event}), applyMiddleware(thunk))}>
                <Grid>
                    <Header/>
                    <ScoreEntryContainer/>
                </Grid>
            </Provider>
        );
    }
}
