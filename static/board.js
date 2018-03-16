webpackJsonp([1],{

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(378);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(381);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ScoreBoardApp = __webpack_require__(393);

var _ScoreBoardApp2 = _interopRequireDefault(_ScoreBoardApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var poll = function poll() {
    setInterval(function () {
        renderApp();
    }, 100);
};

var renderApp = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('/scores');

                    case 2:
                        response = _context.sent;
                        _context.next = 5;
                        return response.json();

                    case 5:
                        data = _context.sent;


                        _reactDom2.default.render(_react2.default.createElement(_ScoreBoardApp2.default, { data: data }), document.getElementById('container'));

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function renderApp() {
        return _ref.apply(this, arguments);
    };
}();

renderApp();
poll();

/***/ }),

/***/ 393:
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

var _ScoreBoardContainer = __webpack_require__(394);

var _ScoreBoardContainer2 = _interopRequireDefault(_ScoreBoardContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreBoardApp = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ScoreBoardApp, _Component);

    function ScoreBoardApp() {
        (0, _classCallCheck3.default)(this, ScoreBoardApp);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreBoardApp.__proto__ || (0, _getPrototypeOf2.default)(ScoreBoardApp)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreBoardApp, [{
        key: 'render',
        value: function render() {
            var _props$data = this.props.data,
                score = _props$data.score,
                event = _props$data.event;


            return _react2.default.createElement(
                _reactBootstrap.Grid,
                null,
                _react2.default.createElement(_ScoreBoardContainer2.default, { scores: score, events: event })
            );
        }
    }]);
    return ScoreBoardApp;
}(_react.Component), _class.propTypes = {
    data: _propTypes2.default.object
}, _temp);
exports.default = ScoreBoardApp;

/***/ }),

/***/ 394:
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

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScoreBoardEvent = __webpack_require__(395);

var _ScoreBoardEvent2 = _interopRequireDefault(_ScoreBoardEvent);

var _ScoreBoardOverview = __webpack_require__(397);

var _ScoreBoardOverview2 = _interopRequireDefault(_ScoreBoardOverview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreBoardContainer = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ScoreBoardContainer, _Component);

    function ScoreBoardContainer() {
        (0, _classCallCheck3.default)(this, ScoreBoardContainer);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreBoardContainer.__proto__ || (0, _getPrototypeOf2.default)(ScoreBoardContainer)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreBoardContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var showEventScreen = (0, _keys2.default)(this.props.events).map(function (event) {
                return _this2.props.events[event];
            }).reduce(function (show, event) {
                return show || event;
            }, false);

            if (showEventScreen) {
                return _react2.default.createElement(
                    'div',
                    null,
                    (0, _keys2.default)(this.props.events).map(function (event) {
                        if (_this2.props.events[event]) {
                            return _react2.default.createElement(_ScoreBoardEvent2.default, { key: event, name: event, scores: _this2.props.scores[event] });
                        }
                    })
                );
            }

            return _react2.default.createElement(_ScoreBoardOverview2.default, { scores: this.props.scores });
        }
    }]);
    return ScoreBoardContainer;
}(_react.Component), _class.propTypes = {
    events: _propTypes2.default.object,
    scores: _propTypes2.default.object
}, _class.defaultProps = {}, _temp);
exports.default = ScoreBoardContainer;

/***/ }),

/***/ 395:
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

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _ScoreBoardEntry = __webpack_require__(396);

var _ScoreBoardEntry2 = _interopRequireDefault(_ScoreBoardEntry);

var _events = __webpack_require__(72);

var _events2 = _interopRequireDefault(_events);

var _reactBootstrap = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreBoardEvent = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ScoreBoardEvent, _Component);

    function ScoreBoardEvent() {
        (0, _classCallCheck3.default)(this, ScoreBoardEvent);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreBoardEvent.__proto__ || (0, _getPrototypeOf2.default)(ScoreBoardEvent)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreBoardEvent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var scores = this.props.scores;


            _events2.default[this.props.name].map(function (heat) {
                scores[heat] = _this2.props.scores[heat] || {};
            });

            var totals = (0, _keys2.default)(scores).reduce(function (obj, heat) {
                return {
                    home: obj.home += scores[heat].home && scores[heat].home.show ? scores[heat].home.score : 0,
                    visitor: obj.visitor += scores[heat].visitor && scores[heat].visitor.show ? scores[heat].visitor.score : 0
                };
            }, {
                home: 0,
                visitor: 0
            });

            (0, _keys2.default)(totals).map(function (key) {
                totals[key] = totals[key].toFixed(3);
            });

            return _react2.default.createElement(
                _reactBootstrap.Table,
                { striped: true, className: 'text-center' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            { colSpan: '3', className: 'header', style: { textAlign: 'center' } },
                            this.props.name
                        )
                    ),
                    _react2.default.createElement(_Header2.default, { scoreboard: true })
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _events2.default[this.props.name].map(function (heat) {
                        return _react2.default.createElement(
                            'tr',
                            { key: heat },
                            _react2.default.createElement(_ScoreBoardEntry2.default, { scoreData: scores[heat].visitor, className: 'visitor' }),
                            _react2.default.createElement(
                                'td',
                                { className: 'col-xs-2' },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    heat
                                )
                            ),
                            _react2.default.createElement(_ScoreBoardEntry2.default, { scoreData: scores[heat].home, className: 'home' })
                        );
                    }),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { className: 'col-xs-5 visitor' },
                            _react2.default.createElement(
                                'b',
                                null,
                                totals.visitor
                            )
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'col-xs-2' },
                            _react2.default.createElement(
                                'b',
                                null,
                                'Total'
                            )
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'col-xs-5 home' },
                            _react2.default.createElement(
                                'b',
                                null,
                                totals.home
                            )
                        )
                    )
                )
            );
        }
    }]);
    return ScoreBoardEvent;
}(_react.Component), _class.propTypes = {
    name: _propTypes2.default.string,
    scores: _propTypes2.default.object
}, _class.defaultProps = {
    name: '',
    scores: {}
}, _temp);
exports.default = ScoreBoardEvent;

/***/ }),

/***/ 396:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreBoardEntry = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ScoreBoardEntry, _Component);

    function ScoreBoardEntry() {
        (0, _classCallCheck3.default)(this, ScoreBoardEntry);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreBoardEntry.__proto__ || (0, _getPrototypeOf2.default)(ScoreBoardEntry)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreBoardEntry, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'td',
                { className: 'col-xs-2 ' + this.props.className },
                this.props.scoreData.show && this.props.scoreData.score && this.props.scoreData.score.toFixed(3)
            );
        }
    }]);
    return ScoreBoardEntry;
}(_react.Component), _class.propTypes = {
    scoreData: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        score: _propTypes2.default.number
    }),
    className: _propTypes2.default.string
}, _class.defaultProps = {
    scoreData: {
        show: false,
        score: null
    },
    className: ''
}, _temp);
exports.default = ScoreBoardEntry;

/***/ }),

/***/ 397:
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

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _lodash = __webpack_require__(398);

var _events = __webpack_require__(72);

var _events2 = _interopRequireDefault(_events);

var _reactBootstrap = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreBoardOverview = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ScoreBoardOverview, _Component);

    function ScoreBoardOverview() {
        (0, _classCallCheck3.default)(this, ScoreBoardOverview);
        return (0, _possibleConstructorReturn3.default)(this, (ScoreBoardOverview.__proto__ || (0, _getPrototypeOf2.default)(ScoreBoardOverview)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScoreBoardOverview, [{
        key: 'render',
        value: function render() {
            var scores = this.props.scores;


            (0, _keys2.default)(_events2.default).map(function (eventName) {
                scores[eventName] = scores[eventName] || {};
                if (!(0, _lodash.isEmpty)(scores[eventName])) {
                    scores[eventName].total = _events2.default[eventName].reduce(function (obj, heat) {
                        if (scores[eventName][heat]) {
                            return {
                                home: obj.home += scores[eventName][heat].home && scores[eventName][heat].home.show ? scores[eventName][heat].home.score : 0,
                                visitor: obj.visitor += scores[eventName][heat].visitor && scores[eventName][heat].visitor.show ? scores[eventName][heat].visitor.score : 0
                            };
                        }

                        return obj;
                    }, {
                        home: 0,
                        visitor: 0
                    });
                }
            });

            var meetTotal = (0, _keys2.default)(scores).map(function (eventName) {
                return scores[eventName];
            }).reduce(function (obj, event) {
                return {
                    home: obj.home += event.total ? event.total.home : 0,
                    visitor: obj.visitor += event.total ? event.total.visitor : 0
                };
            }, {
                home: 0,
                visitor: 0
            });

            return _react2.default.createElement(
                _reactBootstrap.Table,
                { striped: true, className: 'text-center' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            { colSpan: '3', className: 'header', style: { textAlign: 'center' } },
                            'Event Totals'
                        )
                    ),
                    _react2.default.createElement(_Header2.default, { scoreboard: true })
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    (0, _keys2.default)(_events2.default).map(function (eventName) {
                        return _react2.default.createElement(
                            'tr',
                            { key: eventName },
                            _react2.default.createElement(
                                'td',
                                { className: 'col-xs-5 visitor' },
                                scores[eventName].total && scores[eventName].total.visitor !== 0 && scores[eventName].total.visitor.toFixed(3)
                            ),
                            _react2.default.createElement(
                                'td',
                                { className: 'col-xs-2' },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    eventName
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { className: 'col-xs-2 home' },
                                scores[eventName].total && scores[eventName].total.home !== 0 && scores[eventName].total.home.toFixed(3)
                            )
                        );
                    }),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { className: 'col-xs-5 visitor' },
                            _react2.default.createElement(
                                'b',
                                null,
                                meetTotal.visitor.toFixed(3)
                            )
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'col-xs-2' },
                            _react2.default.createElement(
                                'b',
                                null,
                                'Meet Total'
                            )
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'col-xs-5 home' },
                            _react2.default.createElement(
                                'b',
                                null,
                                meetTotal.home.toFixed(3)
                            )
                        )
                    )
                )
            );
        }
    }]);
    return ScoreBoardOverview;
}(_react.Component), _class.propTypes = {
    name: _propTypes2.default.string,
    scores: _propTypes2.default.object
}, _class.defaultProps = {
    name: '',
    scores: {}
}, _temp);
exports.default = ScoreBoardOverview;

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

},[377]);
