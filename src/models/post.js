const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    postID: {
        type: Number,
        required: true,
    },
    accountID: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    postedOn: {
        type: Date,
        required: true,
    },
    lastupdate: {
        type: Date,
        required: false,
    },
    votes: {
        type: Number,
        required: false,
    },
    replies: [
        {
            accountID: {
                type: Number,
                required: false,
            },
            body: {
                type: String,
                required: false,
            },
            datetime: {
                type: Date,
                required: false,
            },
        }
    ],
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;