module.exports = function(app, passport){
/*	app.get('/login', function(req, res){
		res.sendFile('./src/index.html', {message: req.flash('Login Message')});
	});
*/
	// show the signup form
	app.get('/signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.sendFile('../src/index.html', { message: req.flash('signupMessage'), root:__dirname });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/home', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : false // allow flash messages
	}));
}