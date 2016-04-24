/**
 * Created by Mahesh on 3/11/2016.
 */
var express = require('express'),
    path = require('path'),
    favicon  = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


//routes
var routes = require('./routes/index'),
    users = require('./routes/users');

//instantiate the express app
var app = express();


  app.set("view options", {
     layout: false
  });





//configure app to remove #
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/components', express.static(__dirname + '/public/components'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/templates', express.static(__dirname + '/public/templates'));
app.use('/css', express.static(__dirname + '/public/css'));


//get all the routes to index.html

app.get(/.*/, function(req, res) {
    res.sendFile('/public/index.html', {
        root: __dirname
    });
})

//other configs
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/',routes);

// passport config
var Account = require('./app/models/user');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/users');






// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
///assign a port to the app by default it is 3000
var port = process.env.PORT || 3000;
//starting the server
app.listen(port,function(){
    var time = new Date().getMinutes();
    console.log('App is running on http://localhost:'+port+'/'+time);
});

module.exports = app;

