//router.js
const { Router } = require('express');
const User = require('../models/user'); 
const Post = require('../models/post');

// Define lookupUsername function
async function lookupUsername(accountID) {
    const user = await User.findOne({ accountID });
    return user ? user.username : 'Unknown User';
}

const router = Router();




// Render registration form
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    let accountID;

    try {
        let existingUser; // Declare existingUser here

        // Keep generating a new accountID until a unique one is found
        do {
            accountID = generateRandomNumber(10000, 99999);
            existingUser = await User.findOne({ accountID });
        } while (existingUser);

        // Check if the username already exists
        const existingUserByUsername = await User.findOne({ username });

        if (existingUserByUsername) {
            return res.render('register', { error: 'Username already taken' });
        }

        // Create a new user using the User model
        const newUser = new User({
            username,
            password,
            accountID, // Set the accountID
        });

        // Save the user to the database
        await newUser.save();

        // Redirect to the home page or any other desired page
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate;
}



// Your existing routes
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/home', async (req, res) => {
    try {
        // Fetch posts with user information
        const posts = await Post.find().sort({ postedOn: 'desc' }).lean();
        for (const post of posts) {
            post.username = await lookupUsername(post.accountID);
        }

        // Pass the fetched data to the home template
        res.render('home', { user: req.session.user, posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching posts');
    }
});
 

router.get('/comments', (req, res) => {
    res.render('comments');
});


// Render login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login form submission
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ username });

        if (!user) {
            // User not found
            return res.render('login', { error: 'Invalid username or password' });
        }

        // Check if the password is correct
        const isPasswordValid = (password === user.password);

        if (!isPasswordValid) {
            // Incorrect password
            return res.render('login', { error: 'Invalid username or password' });
        }

        // Set up a session to authenticate the user
        req.session.user = user;

        // Redirect to the home page after successful login
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during login');
    }
});

// Add this route to router.js
router.get('/viewpost', async (req, res) => {
    const postID = req.query.postID;

    try {
        // Fetch the post details by postID
        const post = await Post.findOne({ postID });

        if (!post) {
            return res.status(404).send('Post not found');
        }

        // Render the viewpost template with the post details
        res.render('viewpost', { post });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching post details');
    }
});


router.get('/logout', (req, res) => {
    res.render('logout');
});

router.get('/editprofile', (req, res) => {
    res.render('editprofile');
});

router.get('/newpost', (req, res) => {
    res.render('newpost');
});

router.post('/createpost', async (req, res) => {
    const { title, body } = req.body;
    const accountID = req.session.user.accountID;
    const username = req.session.user.username;

    try {
        // Generate a unique postID
        const postID = generateRandomNumber(10000, 99999);

        const newPost = new Post({
            postID,
            accountID,
            title,
            body,
            postedOn: getCurrentDate(),
            lastupdate: getCurrentDate(),
            votes: 0,
            replies: [],
        });

        await newPost.save();

        // Redirect to the home page with the updated posts
        const posts = await Post.find().sort({ postedOn: 'desc' });
        res.render('home', { user: req.session.user, posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating post');
    }
});

router.post('/addcomment', async (req, res) => {
    const { postID, commentBody } = req.body;
    const accountID = req.session.user.accountID;

    try {
        // Fetch the post
        const post = await Post.findOne({ postID });

        if (!post) {
            return res.status(404).send('Post not found');
        }

        // Add the comment to the post
        const newComment = {
            accountID,
            body: commentBody,
        };

        post.replies.push(newComment);
        await post.save();

        // Redirect back to the home page or post details page
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding comment');
    }
});





module.exports = router;
