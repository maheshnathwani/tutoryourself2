/**
 * Created by Mahesh on 2/24/2016.
 */
var express = require('express'),
	http = require('http'),
	path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    flash = require('connect-flash'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    configDB = require('./config/database.js');


//create express app and general configurations
var app = express();
//get request parameters
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//connect to db
mongoose.connect(configDB.url);

//log to console
app.use(morgan('dev'));

	
///assign a port to the app by default it is 3000
var port = process.env.PORT || 3000;
//configure app to remove #
app.use(express.static(__dirname + '/src'));
app.use('/js', express.static(__dirname + '/src/js'));
app.use('/components', express.static(__dirname + '/src/components'));
app.use('/img', express.static(__dirname + '/src/img'));
app.use('/templates', express.static(__dirname + '/src/templates'));
app.use('/css', express.static(__dirname + '/src/css'));


//config for passport
require('./config/passport')(passport);
app.use(session({secret: 'maheshisthebest'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



//get all the routes
app.get('/home', function(req, res){
    res.sendFile('/src/index.html', {root:__dirname});
});




//starting the server
app.listen(port,function(){
	var time = new Date().getMinutes();
    console.log('App is running on http://localhost:'+port+'/'+time);
});