import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import {isEmpty} from 'lodash';

import Events from '../../config/events';

import {Table} from 'react-bootstrap';

export default class ScoreBoardOverview extends Component {
    static propTypes = {
        name: PropTypes.string,
        scores: PropTypes.object
    };

    static defaultProps = {
        name: '',
        scores: {}
    };

    render() {
        const {scores} = this.props;

        Object.keys(Events).map((eventName) => {
            scores[eventName] = scores[eventName] || {};
            if (!isEmpty(scores[eventName])) {
                scores[eventName].total = Events[eventName].reduce((obj, heat) => {
                    if (scores[eventName][heat]) {
                        return {
                            home: obj.home += (scores[eventName][heat].home && scores[eventName][heat].home.show ? scores[eventName][heat].home.score : 0),
                            visitor: obj.visitor += (scores[eventName][heat].visitor && scores[eventName][heat].visitor.show ? scores[eventName][heat].visitor.score : 0),
                        };
                    }

                    return obj;
                }, {
                    home: 0,
                    visitor: 0
                });
            }
        });

        const meetTotal = Object.keys(scores).map((eventName) => scores[eventName]).reduce((obj, event) => {
            return {
                home: obj.home += event.total ? event.total.home : 0,
                visitor: obj.visitor += event.total ? event.total.visitor : 0
            };
        }, {
            home: 0,
            visitor: 0
        });

        return (
            <Table striped className="text-center">
                <thead>
                    <tr>
                        <th colSpan="3" className="header" style={{textAlign: 'center'}}>Event Totals</th>
                    </tr>
                    <Header scoreboard/>
                </thead>
                <tbody>
                    {Object.keys(Events).map((eventName) => {
                        return (
                            <tr key={eventName}>
                                <td className="col-xs-5 visitor">
                                    {scores[eventName].total && scores[eventName].total.visitor !== 0 && scores[eventName].total.visitor.toFixed(3)}
                                </td>
                                <td className="col-xs-2"><b>{eventName}</b></td>
                                <td className="col-xs-2 home">
                                    {scores[eventName].total && scores[eventName].total.home !== 0 && scores[eventName].total.home.toFixed(3)}
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td className="col-xs-5 visitor"><b>{meetTotal.visitor.toFixed(3)}</b></td>
                        <td className="col-xs-2"><b>Meet Total</b></td>
                        <td className="col-xs-5 home"><b>{meetTotal.home.toFixed(3)}</b></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
