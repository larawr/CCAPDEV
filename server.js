// server.js
const dotenv = require('dotenv');
dotenv.config();

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const express = require('express');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars'); // Import the handlebars library
const connect = require('./src/models/db.js');
const router = require('./src/routes/router.js');
const session = require('express-session');
const User = require('./src/models/user'); // Import the User model
const Post = require('./src/models/post');


// Define lookupUsername before main

async function lookupUsername(accountID) {
    try {
        const user = await User.findOne({ accountID });
        return user ? user.username : 'Unknown User';
    } catch (error) {
        console.error('Error looking up username:', error);
        throw error; // Make sure to propagate the error
    }
}


Handlebars.registerHelper('await', function(promise) {
    return promise.fn(this);
});

Handlebars.registerHelper('lookupUsernameAsync', async function (accountID, options) {
    try {
        const username = await lookupUsername(accountID);
        return options.fn(username);
    } catch (error) {
        console.error('Error looking up username:', error);
        return options.inverse('Unknown User');
    }
});

async function createUser(username, password, accountID) {
    try {
        const user = new User({ username, password, accountID });
        await user.save();
        console.log(`User ${username} created successfully.`);
    } catch (error) {
        console.error(`Error creating user ${username}:`, error);
    }
}


async function createPost(title, body, accountID, postID) {
    try {
        const post = new Post({
            title,
            body,
            postedOn: new Date(),
            accountID,
            postID,
        });
        await post.save();
        console.log(`Post "${title}" created successfully.`);
    } catch (error) {
        console.error(`Error creating post "${title}":`, error);
    }
}

module.exports = { lookupUsername };

async function main() {
    const app = express();

    app.use('/static', express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Configure express-session middleware
    app.use(session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
    }));

    const hbs = exphbs.create({
        extname: "hbs",
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        helpers: {
            formatDate: function (date) {
                if (date instanceof Date && !isNaN(date)) {
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                } else {
                    return 'Unknown Date';
                }
            },
            lookupUsername: lookupUsername,
            await: function (promise) {
                return promise.then((data) => new Handlebars.SafeString(data));
            },
        },
    });

    app.engine("hbs", hbs.engine);
    app.set("view engine", "hbs");
    app.set("views", "./src/views");

    // Apply routes to express app
    app.use(router);

    const port = process.env.SERVER_PORT || 3000; // Default to port 3000 if not provided

    try {
        await connect();
        console.log(`Now connected to MongoDB`);

        // Insert hardcoded users into the database
        const hardcodedUsers = [
            { username: 'user1', password: 'password1', accountID: 1 },
            { username: 'user2', password: 'password2', accountID: 2 },
            // Add more users as needed
        ];

        for (const user of hardcodedUsers) {
            await createUser(user.username, user.password, user.accountID);
        }

        const hardcodedPosts = [
            { title: 'Post 1', body: 'This is the body of Post 1', accountID: 1, postID: 1 },
            { title: 'Post 2', body: 'This is the body of Post 2', accountID: 2, postID: 2 },
            { title: 'Post 1', body: 'This is the body of Post 1', accountID: 1, postID: 1 },
            { title: 'Post 2', body: 'This is the body of Post 2', accountID: 2, postID: 2 },
            { title: 'Post 1', body: 'This is the body of Post 1', accountID: 1, postID: 1 },
            { title: 'Post 2', body: 'This is the body of Post 2', accountID: 2, postID: 2 },
            // Add more posts as needed
        ];
        
        for (const post of hardcodedPosts) {
            await createPost(post.title, post.body, post.accountID, post.postID);
        }

        app.listen(port, () => {
            console.log(`express app is now listening on port ${port}`);
        });
    } catch (err) {
        console.log('Connection to MongoDB failed: ');
        console.error(err);
    }
}

main();


