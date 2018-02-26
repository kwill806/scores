import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ScoreBoardEntry from './ScoreBoardEntry';

import Events from '../../config/events';

import {Table} from 'react-bootstrap';

export default class ScoreBoardEvent extends Component {
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

        Events[this.props.name].map((heat) => {
            scores[heat] = this.props.scores[heat] || {};
        });

        const totals = Object.keys(scores).reduce((obj, heat) => {
            return {
                home: obj.home += (scores[heat].home && scores[heat].home.show ? scores[heat].home.score : 0),
                visitor: obj.visitor += (scores[heat].visitor && scores[heat].visitor.show ? scores[heat].visitor.score : 0),
            };
        }, {
            home: 0,
            visitor: 0
        });

        Object.keys(totals).map((key) => {
            totals[key] = totals[key].toFixed(3);
        });

        return (
            <Table striped className="text-center">
                <thead>
                    <tr>
                        <th colSpan="3" className="header" style={{textAlign: 'center'}}>{this.props.name}</th>
                    </tr>
                    <Header scoreboard/>
                </thead>
                <tbody>
                    {Events[this.props.name].map((heat) => {
                        return (
                            <tr key={heat}>
                                <ScoreBoardEntry scoreData={scores[heat].visitor} className="visitor"/>
                                <td className="col-xs-2"><b>{heat}</b></td>
                                <ScoreBoardEntry scoreData={scores[heat].home} className="home"/>
                            </tr>
                        );
                    })}
                    <tr>
                        <td className="col-xs-5 visitor"><b>{totals.visitor}</b></td>
                        <td className="col-xs-2"><b>Total</b></td>
                        <td className="col-xs-5 home"><b>{totals.home}</b></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
