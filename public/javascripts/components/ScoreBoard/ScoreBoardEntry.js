import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ScoreBoardEntry extends Component {
    static propTypes = {
        scoreData: PropTypes.shape({
            show: PropTypes.bool,
            score: PropTypes.number
        }),
        className: PropTypes.string
    };

    static defaultProps = {
        scoreData: {
            show: false,
            score: null
        },
        className: ''
    };

    render() {
        return (
            <td className={`col-xs-2 ${this.props.className}`}>
                {this.props.scoreData.show && (this.props.scoreData.score && this.props.scoreData.score.toFixed(3))}
            </td>
        );
    }
}
