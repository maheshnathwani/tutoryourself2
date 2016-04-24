/**
 * Created by Mahesh on 3/11/2016.
 */
var express = require('express');
var passport = require('passport');
var Account = require('../app/models/user');
var router = express.Router();




router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username ,name: req.body.name, email: req.body.email, level:req.body.level}), req.body.password,  function(err, account) {
        if (err) {
             res.send({success: false, msg: 'Username already exists'});
        }
        else
        {
            var currentUser;
            Account.findOne({username: req.body.username}, function(err, user){
                currentUser = user;
            });
            passport.authenticate('local')(req, res, function () {

                res.send({success: true, msg: 'You have logged in!',user: currentUser});

            });
        }
    });
});


router.post('/login', passport.authenticate('local'), function(req, res) {

    res.send({user:req.user, success:true});
});
router.post('/logout', function(req, res) {
    req.session.destroy()
    req.logout();
    res.send({success:true});
});

router.post('/update', function(req, res) {
    var currentUser = req.body.currentUser;
    Account.update({username: currentUser.username}, {$set: {level: currentUser.level}}, function(err, user) {
        if (err) return handleError(err);
        res.send({success:true});
    })
});
module.exports = router;