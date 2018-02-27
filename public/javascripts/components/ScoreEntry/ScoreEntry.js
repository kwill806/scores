import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormControl, Col} from 'react-bootstrap';

import ScoreActions from '../../actions/score';

const mapStateToProps = (state) => {
    return {state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setScore: bindActionCreators(ScoreActions.setScore, dispatch)
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ScoreEntry extends Component {
    static propTypes = {
        disabled: PropTypes.bool,
        name: PropTypes.string.isRequired,
        setScore: PropTypes.func.isRequired,
        scope: PropTypes.string.isRequired,
        scores: PropTypes.object
    };

    static defaultProps = {
        disabled: false,
        name: 'Event',
        scope: '',
        scores: {}
    };

    setScore = (evt) => {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        this.props.setScore(fieldName, value);
    }

    renderScore = (team) => {
        return (
            <FormControl
                name={`${this.props.scope}_${this.props.name}_${team}`}
                type="text"
                value={this.props.scores[team]}
                placeholder={this.props.disabled ? '' : 'Enter score'}
                onBlur={this.setScore}
                disabled={this.props.disabled}
            />
        );
    }

    render() {
        return (
            <div>
                <Col xs={2}>
                    <h4>{this.props.name}</h4>
                </Col>
                <Col xs={2}>
                    {this.renderScore('visitor')}
                </Col>
                <Col xs={2}>
                    {this.renderScore('home')}
                </Col>
            </div>
        );
    }
}
