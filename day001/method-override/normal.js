var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

function edit(req, res, next) {
    if (req.method !== 'GET') {
        return next();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<form method="post">');
    res.write('<input type="hidden" name="post_to_put" value="put"/>');
    res.write('<input type="text" name=user[name] value="Tobi"/>');
    res.write('<input type="submit" value="Update"/>')
    res.write('</form>');
    res.end();
}

function update(req, res, next) {
    if (req.method !== 'PUT') return next();
    res.end('update ' + req.body.user.name);
}

var app = express();
app.use(bodyParser())
    .use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && 'post_to_put' in req.body) {
            var method = req.body.post_to_put;
            delete req.body.post_to_put;
            return method.toUpperCase();
        }
    }))
    .use(edit)
    .use(update)
    .listen(8080, function () {
        console.log('start on port 8080');
    });