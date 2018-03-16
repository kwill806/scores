webpackJsonp([0],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _score = __webpack_require__(70);

var _score2 = _interopRequireDefault(_score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTIONS = {
    TOGGLE_EVENT: 'TOGGLE_EVENT'
};

var ACTION_CREATORS = {
    toggleEvent: function toggleEvent(eventName) {
        return {
            type: ACTIONS.TOGGLE_EVENT,
            payload: {
                eventName: eventName
            }
        };
    },
    toggleEventAndSend: function toggleEventAndSend(eventName) {
        return function (dispatch) {
            dispatch(ACTION_CREATORS.toggleEvent(eventName));
            dispatch(_score2.default.submitScore());
        };
    }
};

exports.default = (0, _extends3.default)({}, ACTIONS, ACTION_CREATORS);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(100);

var _redux = __webpack_require__(68);

var _reactBootstrap = __webpack_require__(28);

var _score = __webpack_require__(70);

var _score2 = _interopRequireDefault(_score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return { state: state };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        setScore: (0, _redux.bindActionCreators)(_score2.default.setScore, dispatch)
    };
};

var ScoreEntry = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_Component) {
    (0, _inherits3.default)(ScoreEntry, _Component);

    function ScoreEntry() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ScoreEntry);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ScoreEntry.__proto__ || (0, _getPrototypeOf2.default)(ScoreEntry)).call.apply(_ref, [this].concat(args))), _this), _this.setScore = function (evt) {
            var fieldName = evt.target.name;
            var value = evt.target.value;

            _this.props.setScore(fieldName, value);
        }, _this.renderScore = function (team) {
            return _react2.default.createElement(_reactBootstrap.FormControl, {
                name: _this.props.scope + '_' + _this.props.name + '_' + team,
                type: 'text',
                value: _this.props.scores[team],
                placeholder: _this.props.disabled ? '' : 'Enter score',
                onBlur: _this.setScore,
                disabled: _this.props.disabled
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ScoreEntry, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 2 },
                    _react2.default.createElement(
                        'h4',
                        null,
                        this.props.name
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 2 },
                    this.renderScore('visitor')
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 2 },
                    this.renderScore('home')
                )
            );
        }
    }]);
    return ScoreEntry;
}(_react.Component), _class2.propTypes = {
    disabled: _propTypes2.default.bool,
    name: _propTypes2.default.string.isRequired,
    setScore: _propTypes2.default.func.isRequired,
    scope: _propTypes2.default.string.isRequired,
    scores: _propTypes2.default.object
}, _class2.defaultProps = {
    disabled: false,
    name: 'Event',
    scope: '',
    scores: {}
}, _temp2)) || _class);
exports.default = ScoreEntry;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ScoreEntryApp = __webpack_require__(191);

var _ScoreEntryApp2 = _interopRequireDefault(_ScoreEntryApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp() {
    _reactDom2.default.render(_react2.default.createElement(_ScoreEntryApp2.default, null), document.getElementById('container'));
};

renderApp();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(28);

var _reactRedux = __webpack_require__(100);

var _redux = __webpack_require__(68);

var _reduxThunk = __webpack_require__(358);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(359);

var _reducers2 = _interopRequireDefault(_reducers);

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _ScoreEntryContainer = __webpack_require__(370);

var _ScoreEntryContainer2 = _interopRequireDefault(_ScoreEntryContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreEntryApp = function (_Component) {
    (0, _inherits3.default)(ScoreEntryApp, _Component);

    function ScoreEntryApp() {
        (0, _classCallCheck3.default)(this, ScoreEntryApp);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreEntryApp.__proto__ || (0, _getPrototypeOf2.default)(ScoreEntryApp)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreEntryApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default)) },
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(_ScoreEntryContainer2.default, null)
                )
            );
        }
    }]);
    return ScoreEntryApp;
}(_react.Component);

exports.default = ScoreEntryApp;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutable = __webpack_require__(360);

var _score = __webpack_require__(365);

var _score2 = _interopRequireDefault(_score);

var _event = __webpack_require__(368);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _reduxImmutable.combineReducers)({ score: _score2.default, event: _event2.default });

exports.default = reducer;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = __webpack_require__(69);

var _immutable2 = _interopRequireDefault(_immutable);

var _score = __webpack_require__(70);

var _score2 = _interopRequireDefault(_score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = new _immutable2.default.Map();

var score = function score() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _score2.default.SET_SCORE:
            return state.mergeIn(action.payload.fieldName.split('_'), _immutable2.default.fromJS({
                score: parseFloat(action.payload.value)
            }));
        case _score2.default.SHOW_SCORE:
            return state.mergeIn(action.payload.fieldName.split('_'), _immutable2.default.fromJS({
                show: true
            }));
        default:
            return state;
    }
};

exports.default = score;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(369);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _immutable = __webpack_require__(69);

var _immutable2 = _interopRequireDefault(_immutable);

var _event = __webpack_require__(173);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = _immutable2.default.fromJS({
    Compulsary: false,
    Acro: false,
    Pyramid: false,
    Toss: false,
    Tumbling: false,
    Team: false
});

var score = function score() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _event2.default.TOGGLE_EVENT:
            return DEFAULT_STATE.merge((0, _defineProperty3.default)({}, action.payload.eventName, !state.get(action.payload.eventName)));
        default:
            return state;
    }
};

exports.default = score;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _keys = __webpack_require__(51);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _events = __webpack_require__(72);

var _events2 = _interopRequireDefault(_events);

var _Event = __webpack_require__(373);

var _Event2 = _interopRequireDefault(_Event);

var _ScoreEntry = __webpack_require__(175);

var _ScoreEntry2 = _interopRequireDefault(_ScoreEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreEntryContainer = function (_Component) {
    (0, _inherits3.default)(ScoreEntryContainer, _Component);

    function ScoreEntryContainer() {
        (0, _classCallCheck3.default)(this, ScoreEntryContainer);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreEntryContainer.__proto__ || (0, _getPrototypeOf2.default)(ScoreEntryContainer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreEntryContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                (0, _keys2.default)(_events2.default).map(function (event) {
                    return _react2.default.createElement(
                        _Event2.default,
                        { key: event, name: event },
                        _events2.default[event].map(function (heat) {
                            return _react2.default.createElement(_ScoreEntry2.default, { key: heat, name: heat });
                        })
                    );
                })
            );
        }
    }]);
    return ScoreEntryContainer;
}(_react.Component);

exports.default = ScoreEntryContainer;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(51);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(100);

var _redux = __webpack_require__(68);

var _reactBootstrap = __webpack_require__(28);

var _reactBootstrapToggle = __webpack_require__(374);

var _reactBootstrapToggle2 = _interopRequireDefault(_reactBootstrapToggle);

var _score = __webpack_require__(70);

var _score2 = _interopRequireDefault(_score);

var _event = __webpack_require__(173);

var _event2 = _interopRequireDefault(_event);

var _ScoreEntry = __webpack_require__(175);

var _ScoreEntry2 = _interopRequireDefault(_ScoreEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, props) {
    var scores = state.get('score').get(props.name) || [];

    var totals = scores.reduce(function (obj, curr) {
        return {
            home: obj.home += curr.getIn(['home', 'score']) || 0,
            visitor: obj.visitor += curr.getIn(['visitor', 'score']) || 0
        };
    }, {
        home: 0,
        visitor: 0
    });

    (0, _keys2.default)(totals).map(function (key) {
        totals[key] = totals[key].toFixed(3);
    });

    return {
        totals: totals,
        scores: state.get('score'),
        toggled: state.get('event').get(props.name)
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        showScore: (0, _redux.bindActionCreators)(_score2.default.showScoreAndSend, dispatch),
        toggleEvent: (0, _redux.bindActionCreators)(_event2.default.toggleEventAndSend, dispatch)
    };
};

var Event = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_Component) {
    (0, _inherits3.default)(Event, _Component);

    function Event() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Event);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Event.__proto__ || (0, _getPrototypeOf2.default)(Event)).call.apply(_ref, [this].concat(args))), _this), _this.showScore = function (evt) {
            _this.props.showScore(evt.target.name);
        }, _this.onToggle = function () {
            _this.props.toggleEvent(_this.props.name);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Event, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var events = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                {
                    controlId: this.props.name
                },
                _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    this.props.name
                ),
                _react2.default.createElement(_reactBootstrapToggle2.default, {
                    onClick: this.onToggle,
                    on: _react2.default.createElement(
                        'h6',
                        null,
                        'Show'
                    ),
                    off: _react2.default.createElement(
                        'h6',
                        null,
                        'Hide'
                    ),
                    size: 'xs',
                    offstyle: 'danger',
                    width: 84,
                    active: this.props.toggled
                }),
                events.map(function (event, i) {
                    return _react2.default.createElement(
                        _reactBootstrap.Row,
                        { key: i },
                        _react2.default.cloneElement(event, { scope: _this2.props.name }),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            {
                                bsStyle: 'primary',
                                name: _this2.props.name + '_' + event.props.name + '_visitor',
                                onClick: _this2.showScore,
                                disabled: !_this2.props.scores.getIn([_this2.props.name, event.props.name, 'visitor', 'score']),
                                tabIndex: '-1'
                            },
                            'Reveal Visitor'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            {
                                bsStyle: 'primary',
                                name: _this2.props.name + '_' + event.props.name + '_home',
                                onClick: _this2.showScore,
                                disabled: !_this2.props.scores.getIn([_this2.props.name, event.props.name, 'home', 'score']),
                                tabIndex: '-1'
                            },
                            'Reveal Home'
                        )
                    );
                }),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(_ScoreEntry2.default, { name: 'Total', scores: this.props.totals, disabled: true })
                )
            );
        }
    }]);
    return Event;
}(_react.Component), _class2.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.node]).isRequired,
    name: _propTypes2.default.string.isRequired,
    scores: _propTypes2.default.object,
    showScore: _propTypes2.default.func.isRequired,
    toggleEvent: _propTypes2.default.func.isRequired,
    toggled: _propTypes2.default.bool.isRequired,
    totals: _propTypes2.default.object.isRequired
}, _class2.defaultProps = {
    children: [],
    totals: {},
    toggled: false
}, _temp2)) || _class);
exports.default = Event;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(366);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTIONS = {
    SET_SCORE: 'SET_SCORE',
    SHOW_SCORE: 'SHOW_SCORE'
};

var ACTION_CREATORS = {
    setScore: function setScore(fieldName, value) {
        return {
            type: ACTIONS.SET_SCORE,
            payload: {
                fieldName: fieldName,
                value: value
            }
        };
    },
    showScore: function showScore(fieldName) {
        return {
            type: ACTIONS.SHOW_SCORE,
            payload: {
                fieldName: fieldName
            }
        };
    },
    showScoreAndSend: function showScoreAndSend(fieldName) {
        return function (dispatch) {
            dispatch(ACTION_CREATORS.showScore(fieldName));
            dispatch(ACTION_CREATORS.submitScore());
        };
    },
    submitScore: function submitScore() {
        return function (dispatch, getState) {
            return fetch('/scores', {
                body: (0, _stringify2.default)(getState().toJS()),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });
        };
    }
};

exports.default = (0, _extends3.default)({}, ACTIONS, ACTION_CREATORS);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);
        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            if (this.props.scoreboard) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('img', { style: { width: '200px', height: '200px' }, src: 'images/georgetown.png' })
                    ),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement('img', { style: { width: '200px', height: '200px' }, src: 'images/converse.png' })
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: 'team-header' },
                    _react2.default.createElement(_reactBootstrap.Col, { xs: 2 }),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 2 },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Georgetown'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 2 },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Converse'
                        )
                    )
                )
            );
        }
    }]);
    return Header;
}(_react.Component), _class.propTypes = {
    scoreboard: _propTypes2.default.bool
}, _class.defaultProps = {
    scoreboard: false
}, _temp);
exports.default = Header;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Compulsory: ['Acro', 'Pyramid', 'Toss', 'Tumbling'],
    Acro: ['5 Element', '6 Element', '7 Element'],
    Pyramid: ['Inversion', 'Synchronized', 'Open'],
    Toss: ['450 Salto', 'Synchronized', 'Open'],
    Tumbling: ['Duo', 'Trio', 'Quad', 'Aerial', '6 Element', 'Open'],
    Team: ['Team Event']
};

/***/ })

},[180]);
