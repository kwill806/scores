import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, ControlLabel, Button, Row, Col} from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';

import ScoreActions from '../../actions/score';
import EventActions from '../../actions/event';
import ScoreEntry from './ScoreEntry';

const mapStateToProps = (state, props) => {
    return {
        toggled: state.get('event').get(props.name)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitScore: bindActionCreators(ScoreActions.submitScore, dispatch),
        toggleEvent: bindActionCreators(EventActions.toggleEvent, dispatch)
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Event extends Component {
    static defaultProps = {
        children: []
    };

    constructor() {
        super();

        this.state = {
            toggled: false
        };
    }

    submitScore = (evt) => {
        alert(evt.target.name);
        this.props.submitScore();
    }

    onToggle = () => {
        this.props.toggleEvent(this.props.name);

        this.setState({
            toggled: !this.state.toggled
        });
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
                    active={this.props.toggled}
                />
                {events.map((event, i) => {
                    return (
                        <Row key={i}>
                            {React.cloneElement(event, {scope: this.props.name})}
                            <Button bsStyle="primary" name={`${this.props.name}_${event.props.name}_visitor`} onClick={this.submitScore}>Reveal Visitor</Button>
                            <Button bsStyle="primary" name={`${this.props.name}_${event.props.name}_visitor`} onClick={this.submitScore}>Reveal Home</Button>
                        </Row>
                    );
                })}
                <Row>
                    <ScoreEntry name="Total" disabled/>
                </Row>
            </FormGroup>
        );
    }
}
