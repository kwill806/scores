import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ScoreBoardEvent from './ScoreBoardEvent';
import ScoreBoardOverview from './ScoreBoardOverview';

export default class ScoreBoardContainer extends Component {
    static propTypes = {
        events: PropTypes.object,
        scores: PropTypes.object
    };

    static defaultProps = {};

    render() {
        const showEventScreen = Object.keys(this.props.events).map((event) => this.props.events[event]).reduce((show, event) => {
            return show || event;
        }, false);

        if (showEventScreen) {
            return (
                <div>
                    {Object.keys(this.props.events).map((event) => {
                        if (this.props.events[event]) {
                            return (<ScoreBoardEvent key={event} name={event} scores={this.props.scores[event]}/>);
                        }
                    })}
                </div>
            );
        }

        return (
            <ScoreBoardOverview scores={this.props.scores}/>
        );
    }
}
