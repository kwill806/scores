import React, {Component} from 'react';
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
    static defaultProps = {
        name: 'Event',
        scope: ''
    };

    setScore = (evt) => {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        this.props.setScore(fieldName, value);
    }

    render() {
        return (
            <div>
                <Col xs={2}>
                    <h4>{this.props.name}</h4>
                </Col>
                <Col xs={2}>
                    <FormControl
                        name={`${this.props.scope}_${this.props.name}_visitor`}
                        type="text"
                        placeholder={this.props.disabled ? '' : 'Enter score'}
                        onChange={this.setScore}
                        disabled={this.props.disabled}
                    />
                </Col>
                <Col xs={2}>
                    <FormControl
                        name={`${this.props.scope}_${this.props.name}_home`}
                        type="text"
                        placeholder={this.props.disabled ? '' : 'Enter score'}
                        onChange={this.setScore}
                        disabled={this.props.disabled}
                    />
                </Col>
            </div>
        );
    }
}
