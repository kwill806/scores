import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

import reducer from '../reducers';

import Header from './Header/Header';
import ScoreEntryContainer from './ScoreEntry/ScoreEntryContainer';

export default class ScoreEntryApp extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        return (
            <Provider store={createStore(reducer, Immutable.fromJS(this.props.data), applyMiddleware(thunk))}>
                <Grid>
                    <Header/>
                    <ScoreEntryContainer/>
                </Grid>
            </Provider>
        );
    }
}
