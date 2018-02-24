import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Event from './Event';
import ScoreEntry from './ScoreEntry';

export default class ScoreEntryContainer extends Component {
    render() {
        return (
            <div>
                <Event name="Compulsary">
                    <ScoreEntry name="Acro"/>
                    <ScoreEntry name="Pyramid"/>
                    <ScoreEntry name="Toss"/>
                    <ScoreEntry name="Tumbling"/>
                </Event>
                <Event name="Acro">
                    <ScoreEntry name="5 Element"/>
                    <ScoreEntry name="6 Element"/>
                    <ScoreEntry name="7 Element"/>
                </Event>
                <Event name="Pyramid">
                    <ScoreEntry name="Inversion"/>
                    <ScoreEntry name="Synchronized"/>
                    <ScoreEntry name="Open"/>
                </Event>
                <Event name="Toss">
                    <ScoreEntry name="450 Salto"/>
                    <ScoreEntry name="Synchronized"/>
                    <ScoreEntry name="Open"/>
                </Event>
                <Event name="Tumbling">
                    <ScoreEntry name="Duo"/>
                    <ScoreEntry name="Trio"/>
                    <ScoreEntry name="Quad"/>
                    <ScoreEntry name="Aerial"/>
                    <ScoreEntry name="6 Element"/>
                    <ScoreEntry name="Open"/>
                </Event>
                <Event name="Team">
                    <ScoreEntry name="Team Event"/>
                </Event>
            </div>
        );
    }
}
