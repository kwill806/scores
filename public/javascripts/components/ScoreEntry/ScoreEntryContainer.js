import React, {Component} from 'react';

import Events from '../../config/events';

import Event from './Event';
import ScoreEntry from './ScoreEntry';

export default class ScoreEntryContainer extends Component {
    render() {
        return (
            <div>
                {Object.keys(Events).map((event) => {
                    return (
                        <Event key={event} name={event}>
                            {Events[event].map((heat) => {
                                return (
                                    <ScoreEntry key={heat} name={heat}/>
                                );
                            })}
                        </Event>
                    );
                })}
            </div>
        );
    }
}
