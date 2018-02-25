import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Row className="team-header">
                    <Col xs={2}/>
                    <Col xs={2}>
                        <span>Gannon</span>
                    </Col>
                    <Col xs={2}>
                        <span>Converse</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
