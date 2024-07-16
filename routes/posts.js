const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    posttext: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: [],
    },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
