webpackJsonp([1],{

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _stringify = __webpack_require__(150);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(69);
var path = __webpack_require__(36);
// var favicon = require('serve-favicon');
var logger = __webpack_require__(688);
var cookieParser = __webpack_require__(691);
var bodyParser = __webpack_require__(245);
var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var index = __webpack_require__(692);
var entry = __webpack_require__(693);
var board = __webpack_require__(694);
var scores = __webpack_require__(695);

var app = express();

fs.writeFileSync('scores.json', (0, _stringify2.default)({
    'score': {},
    'event': {
        'Compulsary': false,
        'Acro': false,
        'Pyramid': false,
        'Toss': false,
        'Tumbling': false,
        'Team': false,
        'Compulsory': false
    }
}, null, 2));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/', index);
app.use('/entry', entry);
app.use('/board', board);
app.use('/scores', scores);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function () {
    return console.log('AT app listening on port 3000!');
});

module.exports = app;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(69);
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.redirect('/board');
});

module.exports = router;

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(69);
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('entry', { title: 'Express' });
});

module.exports = router;

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(69);
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('board', { title: 'A&T' });
});

module.exports = router;

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(150);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(69);
var router = express.Router();
var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* POST scores */
router.post('/', function (req, res) {
    fs.writeFileSync('scores.json', (0, _stringify2.default)(req.body, null, 2));
    res.send('respond with a resource');
});

router.get('/', function (req, res) {
    var scores = fs.readFileSync('scores.json', {
        encoding: 'utf-8'
    });
    res.send(scores);
});

module.exports = router;

/***/ })

},[521]);
