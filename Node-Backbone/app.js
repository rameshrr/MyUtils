/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    //, pg = require('pg')
    , path = require('path');


var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(require('less-middleware')({ src:__dirname + '/public' }));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/patients', function (req, res) {
    res.send({"patients":[
        {
            firstName:'Test FN',
            lastName:'Test LN'
        },
        {
            firstName:'Test FN1',
            lastName:'Test LN1'
        },
        {
            firstName:'Test FN2',
            lastName:'Test LN2'
        }
    ]});
});

app.get('/patient/:id', function(req, res){
    res.send({firstName:'New FN',
        lastName:'New LN'});
});
app.get('/patient', function(req, res){
    res.send({firstName:'New FN',
        lastName:'New LN'});
});

app.post('/patient', function(req, res){
    var model = req.body;
    res.send({firstName:'New FN',
        lastName:'New LN'});
});
app.put('/patient', function(req, res){
    var model = req.body;
    res.send({firstName:'New FN',
        lastName:'New LN'});
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
