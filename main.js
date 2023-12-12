var posts = [
    {
        "postID": 0,
        "accountID": 0,
        "title": "How to learn web development from scratch?",
        "body": "As the title says. Been interested in starting to learn coding for various use cases. I want to know how exactly I start like what programming language I should learn or what software I should use?",
        "postedon": "20231005T104523-0400",
        "lastupdate": "20231005T120543-0400",
        "votes": 36,
        "replies":[
            {
                "accountID": 1,
                "body": "Try learning python, it has a very simple syntax",
                "datetime": "20231005T104523-0400"
            },
            {   
                "accountID": 2,
                "body": "You should probably start with something more straightforward like C. For the IDE, I generally use Sublime Text but that's just my preference",
                "datetime": "20231005T113523-0400"
            },
            {   
                "accountID": 3,
                "body": "For the IDE you have got to go with VSCode due to how flexible it is. For the language, probably either C or Java.",
                "datetime": "20231005T114043-0400"
            },
            {   
                "accountID": 4,
                "body": "Definitely Java and use NetBeans for your IDE",
                "datetime": "20231005T114143-0400"
            }
        ]
    },
    {
        "postID": 1,
        "accountID": 1,
        "title": "Tips for debugging JavaScript",
        "body": "Do you have any tips on debugging JavaScript? My mind is going crazy because of some bugs I can't find",
        "postedon": "20231005T104523-0400",
        "lastupdate": "20231005T120543-0400",
        "votes": 36,
        "replies":[
            {
                "accountID": 0,
                "body": "You can use console.log() to check if your code works",
                "datetime": "20231005T104523-0400"
            },
            {   
                "accountID": 3,
                "body": "Use Breakpoints in the Browser Debugger: You can set breakpoints in your code, which will pause execution at that point, allowing you to inspect the current state.",
                "datetime": "20231005T113523-0400"
            },
            {   
                "accountID": 2,
                "body": "Use the JavaScript debugger Statement: Similar to breakpoints, you can place a debugger; line in your code. Chrome will automatically stop there when executing2..",
                "datetime": "20231005T114043-0400"
            },
            {   
                "accountID": 4,
                "body": "Utilize Error Messages for Bug Identification: Pay close attention to any error messages that appear in your console, as they can provide valuable clues about what’s going wrong1.",
                "datetime": "20231005T114143-0400"
            }
        ]
    },
    {
        "postID": 2,
        "accountID": 2,
        "title": "Best CSS frameworks for responsive design",
        "body": "What is the best CSS framework for responsive design you use? I'm currently using Bootstrap",
        "postedon": "20231005T104523-0400",
        "lastupdate": "20231005T120543-0400",
        "votes": 37,
        "replies":[
            {
                "accountID": 0,
                "body": "In my 10 years of experience I use Bootstrap and I haven't encountered some problems",
                "datetime": "20231005T104523-0400"
            },
            {   
                "accountID": 1,
                "body": "I Agree With TechW I also use Bootstrap",
                "datetime": "20231005T113523-0400"
            },
            {   
                "accountID": 3,
                "body": "For me, Tailwind - Tailwind offers a modern utility-based approach for building responsive sites. It has a vast amount of utility classes that can let you build modern websites without writing CSS.",
                "datetime": "20231005T114043-0400"
            },
            {   
                "accountID": 4,
                "body": "I used Tachyons this is another utility-based CSS library that does the heavy lifting of offering many styles out of the box so you don’t need to write a lot of CSS yourself.",
                "datetime": "20231005T114143-0400"
            }
        ]
    },
    {
        "postID": 3,
        "accountID": 3,
        "title": "Python vs Java for Web Development",
        "body": "Hello, I'm new to web development and trying to decide whether to learn Python (Django/Flask) or Java (Spring) for backend development. Can anyone provide some pros and cons for both? Thanks!",
        "postedon": "20231005T104523-0400",
        "lastupdate": "20231005T120543-0400",
        "votes": 38,
        "replies":[
            {
                "accountID": 0,
                "body": "I've worked with both and I personally prefer Python (Django/Flask). It's easier to learn and the syntax is cleaner.",
                "datetime": "20231005T104523-0400"
            },
            {   
                "accountID": 1,
                "body": "Java (Spring) is a robust language and it's widely used in large scale applications. If you're planning to work in a big tech company, having Java in your skill set could be beneficial.",
                "datetime": "20231005T113523-0400"
            },
            {   
                "accountID": 2,
                "body": "If you're new to programming, I would recommend Python because of its simplicity. However, learning Java will give you a deeper understanding of programming concepts.",
                "datetime": "20231005T114043-0400"
            },
            {   
                "accountID": 4,
                "body": "In terms of performance, Java is generally faster. However, Python is usually more than fast enough for web development and its simplicity can lead to faster development times.",
                "datetime": "20231005T114143-0400"
            }
        ]
    },
    {
        "postID": 4,
        "accountID": 4,
        "title": "Cybersecurity Resources Needed",
        "body": "Greetings everyone, I'm looking to learn more about cybersecurity. Can anyone recommend some good online courses, books, or other resources? Your help would be greatly appreciated!",
        "postedon": "20231005T104523-0400",
        "lastupdate": "20231005T120543-0400",
        "votes": 36,
        "replies":[
            {
                "accountID": 0,
                "body": "I would recommend the Introduction to Cybersecurity course on Coursera. It's a great starting point for beginners and covers a wide range of topics.",
                "datetime": "20231005T104523-0400"
            },
            {   
                "accountID": 1,
                "body": "Check out the cybersecurity courses on edX. They have a variety of courses ranging from beginner to advanced levels.",
                "datetime": "20231005T113523-0400"
            },
            {   
                "accountID": 2,
                "body": "The Art of Invisibility by Kevin Mitnick is a great book that provides real-world examples and practical advice on cybersecurity.",
                "datetime": "20231005T114043-0400"
            },
            {   
                "accountID": 3,
                "body": "For hands-on practice, try Hack The Box. It's an online platform that allows you to test your penetration testing skills.",
                "datetime": "20231005T114143-0400"
            }
        ]
    }
];

var accounts = [
    {
        "accountID": 0,
        "displayname": "TechW",
        "description": "They see me Coding, They Hatin",
        "posts": [0],
        "comments":[
            {
                "postID": 1,
                "comment_num": 0
            }
        ],
        "credentials": {
            "username": "TechW",
            "password": "12345"
        }
    },
    {
        "accountID": 1,
        "displayname": "Weismann",
        "description": "They see me Coding, They Hatin",
        "posts": [1],
        "comments":[
            {
                "postID": 0,
                "comment_num": 0
            }
        ],
        "credentials": {
            "username": "Weismann",
            "password": "12345"
        }
    },
    {
        "accountID": 2,
        "displayname": "Alandal",
        "description": "They see me Coding, They Hatin",
        "posts": [2],
        "comments":[
            {
                "postID": 0,
                "comment_num": 1
            }
        ],
        "credentials": {
            "username": "Alandal",
            "password": "12345"
        }
    },
    {
        "accountID": 3,
        "displayname": "Skipee",
        "description": "They see me Coding, They Hatin",
        "posts": [3],
        "comments":[
            {
                "postID": 0,
                "comment_num": 2
            }
        ],
        "credentials": {
            "username": "Skipee",
            "password": "12345"
        }
    },
    {
        "accountID": 4,
        "displayname": "Findo",
        "description": "They see me Coding, They Hatin",
        "posts": [4],
        "comments":[
            {
                "postID": 1,
                "comment_num": 3
            }
        ],
        "credentials": {
            "username": "Findo",
            "password": "12345"
        }
    }
];

let commentId; // Declare commentId globally

// Function to extract query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// New function to get a comment by ID
function getCommentById(postId, commentId) {
    const post = posts.find(post => post.postID === postId);

    if (post) {
        const comment = post.replies.find(comment => comment.commentID === commentId);
        return comment || null;
    }

    return null;
}


// New function to get an account by ID
function getAccountById(accountId) {
    return accounts.find(account => account.accountID === accountId) || null;
}

// Existing function to move to a post
function moveToPost(postID) {
    if (postID >= 0 && postID < posts.length) {
        window.location.href = `viewpost.html?postID=${postID}`;
        console.log("Move to post:", postID);
    } else {
        console.error("Invalid postID:", postID);
    }
}

// Existing function to move to a profile
function moveToProfile(accountID){
    window.location.href = `viewprofile.html?accountID=${accountID}`;
}

// Existing function to move to edit a post
function moveToEditPost() {
    window.location.href = 'editpost.html';
    console.log("Move to edit post");
}

// Existing code for populating form fields
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get('postID');

    if (postID === null) {
        console.error("Post ID not found in URL");
        // Handle the error, maybe redirect to an error page
    } else {
        const post = posts[postID];

        $("#post_title").text(post.title);
        $("#post_body p").text(post.body);

        const comments = post.replies;

        for (const comment of comments) {
            const commentHTML = `<li><p><strong>${accounts[comment.accountID].displayname}:</strong> ${comment.body}</p></li>`;
            $(".comments").append(commentHTML);
        }
    }
});

// New code for populating form fields with comments
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const commentId = urlParams.get('commentID');

    if (commentId) {
        populateCommentFormFields(commentId);
    } else {
        console.error('Comment ID not found in URL');
        // Handle the error, maybe redirect to an error page
    }

    // Add event listeners for your forms (edit and delete)
    document.getElementById('edit-comment-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const newCommentBody = document.getElementById('comment-body').value;
        editComment(commentId, newCommentBody);
    });

    document.getElementById('delete-comment-form').addEventListener('submit', function (event) {
        event.preventDefault();
        deleteComment(commentId);
    });
});

// New function to populate comment form fields
function populateCommentFormFields(commentId) {
    const comment = getCommentById(commentId);

    if (comment) {
        document.getElementById('comment-body').value = comment.body;
    } else {
        console.error('Comment not found');
        // Handle the error, maybe redirect to an error page
    }
}

// Add event listeners for your forms (edit and delete)
document.getElementById('edit-comment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newCommentBody = document.getElementById('comment-body').value;
    editComment(commentId, newCommentBody);
});

document.getElementById('delete-comment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    deleteComment(commentId);
});

// Existing function to populate post form fields
const postId = urlParams.get('postID');
document.addEventListener('DOMContentLoaded', function () {
    populateFormFields(postId);
});

// Existing function to edit a comment
function editComment(commentId, newCommentBody) {
    const comment = getCommentById(commentId);

    if (comment) {
        comment.body = newCommentBody;
        console.log('Comment edited successfully:', comment);
        // You might want to update the UI or take other actions here
    } else {
        console.error('Comment not found');
        // Handle the error, maybe redirect to an error page
    }
}

// Function to delete a comment
function deleteComment(commentId) {
    // Find the post and comment
    for (const post of posts) {
        const commentIndex = post.replies.findIndex(comment => comment.accountID === commentId);

        if (commentIndex !== -1) {
            // Remove the comment from the replies array
            post.replies.splice(commentIndex, 1);
            console.log('Comment deleted successfully:', commentId);
            moveToPost(post.postID);

            return; // Exit the function since the comment is found and deleted
        }
    }

    console.error('Comment not found');
    // Handle the error, maybe redirect to an error page or show a message
}
