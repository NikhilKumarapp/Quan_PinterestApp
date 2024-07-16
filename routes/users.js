const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/pinterest');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
    },
    posts: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Post'
    }],
    dp: {
        type: String 
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true }); 


userSchema.plugin(plm);
// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

