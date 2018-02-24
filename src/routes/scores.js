var express = require('express');
var router = express.Router();
var fs = require('fs');

/* POST scores */
router.post('/', function(req, res) {
    fs.writeFile('scores.json', JSON.stringify(req.body, null, 2));
    res.send('respond with a resource');
});

router.get('/', function(req, res) {
    const scores = fs.readFileSync('scores.json', {
        encoding: 'utf-8'
    });
    res.send(scores);
});

module.exports = router;
