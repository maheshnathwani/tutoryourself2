var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    level: Number
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);