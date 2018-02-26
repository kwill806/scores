var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var index = require('./routes/index');
var entry = require('./routes/entry');
var board = require('./routes/board');
var scores = require('./routes/scores');

var app = express();

fs.writeFileSync('scores.json', JSON.stringify({
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
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => console.log('AT app listening on port 3000!'));

module.exports = app;
