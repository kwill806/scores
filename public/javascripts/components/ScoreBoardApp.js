import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import Header from './Header/Header';
import ScoreBoardContainer from './ScoreBoard/ScoreBoardContainer';

export default class ScoreBoardApp extends Component {
    render() {
        return (
            <Grid>
                <Header/>
                <ScoreBoardContainer scores={this.props.scores}/>
            </Grid>
        );
    }
}
