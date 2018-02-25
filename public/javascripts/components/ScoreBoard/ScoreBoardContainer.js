import React, {Component} from 'react';


export default class ScoreBoardContainer extends Component {
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.scores, null, 2)}</pre>
            </div>
        );
    }
}
