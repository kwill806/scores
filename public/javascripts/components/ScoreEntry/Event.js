import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, ControlLabel, Button, Row} from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';

import ScoreActions from '../../actions/score';
import EventActions from '../../actions/event';
import ScoreEntry from './ScoreEntry';

const mapStateToProps = (state, props) => {
    const scores = state.get('score').get(props.name) || [];

    const totals = scores.reduce((obj, curr) => {
        return {
            home: obj.home += (curr.getIn(['home', 'score']) || 0),
            visitor: obj.visitor += (curr.getIn(['visitor', 'score']) || 0),
        };
    }, {
        home: 0,
        visitor: 0
    });

    Object.keys(totals).map((key) => {
        totals[key] = totals[key].toFixed(3);
    });

    return {
        totals,
        scores: state.get('score'),
        toggled: state.get('event').get(props.name)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showScore: bindActionCreators(ScoreActions.showScoreAndSend, dispatch),
        toggleEvent: bindActionCreators(EventActions.toggleEventAndSend, dispatch)
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Event extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
        name: PropTypes.string.isRequired,
        scores: PropTypes.object,
        showScore: PropTypes.func.isRequired,
        toggleEvent: PropTypes.func.isRequired,
        toggled: PropTypes.bool.isRequired,
        totals: PropTypes.object.isRequired
    }

    static defaultProps = {
        children: [],
        totals: {},
        toggled: false
    };

    showScore = (evt) => {
        this.props.showScore(evt.target.name);
    };

    onToggle = () => {
        this.props.toggleEvent(this.props.name);
    }

    render() {
        const events = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return (
            <FormGroup
                controlId={this.props.name}
            >
                <ControlLabel>{this.props.name}</ControlLabel>
                <Toggle
                    onClick={this.onToggle}
                    on={<h6>Show</h6>}
                    off={<h6>Hide</h6>}
                    size="xs"
                    offstyle="danger"
                    width={84}
                    active={this.props.toggled}
                />
                {events.map((event, i) => {
                    return (
                        <Row key={i}>
                            {React.cloneElement(event, {scope: this.props.name})}
                            <Button bsStyle="primary" name={`${this.props.name}_${event.props.name}_visitor`} onClick={this.showScore} disabled={this.props.scores.getIn([this.props.name, event.props.name, 'visitor']) === undefined}>Reveal Visitor</Button>
                            <Button bsStyle="primary" name={`${this.props.name}_${event.props.name}_home`} onClick={this.showScore} disabled={this.props.scores.getIn([this.props.name, event.props.name, 'home']) === undefined}>Reveal Home</Button>
                        </Row>
                    );
                })}
                <Row>
                    <ScoreEntry name="Total" scores={this.props.totals} disabled/>
                </Row>
            </FormGroup>
        );
    }
}
