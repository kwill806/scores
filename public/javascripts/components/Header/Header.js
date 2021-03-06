import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

export default class Header extends Component {
    static propTypes = {
        scoreboard: PropTypes.bool
    };

    static defaultProps = {
        scoreboard: false
    };

    render() {
        if (this.props.scoreboard) {
            return (
                <tr>
                    <td>
                        <img style={{width: '200px', height: '200px'}} src='images/baylor.png'/>
                    </td>
                    <td></td>
                    <td>
                        <img style={{width: '200px', height: '200px'}} src='images/converse.png'/>
                    </td>
                </tr>
            );
        }

        return (
            <div>
                <Row className="team-header">
                    <Col xs={2}/>
                    <Col xs={2}>
                        <span>Baylor</span>
                    </Col>
                    <Col xs={2}>
                        <span>Converse</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
