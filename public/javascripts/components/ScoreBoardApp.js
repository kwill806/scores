import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';

import ScoreBoardContainer from './ScoreBoard/ScoreBoardContainer';

export default class ScoreBoardApp extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const {score, event} = this.props.data;

        return (
            <Grid>
                <ScoreBoardContainer scores={score} events={event}/>
            </Grid>
        );
    }
}
