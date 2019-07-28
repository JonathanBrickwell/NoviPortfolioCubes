// With this I plan on encapsulating data more, so it can't be changed from the outside and my blog content is preserved
// No one from the outside can do blogs[0].id = 3 and change the id value of our blog from the outside.
var blogsContainer = (function() {

    var blogs = [
        {
            id: 1,
            name: 'Welcome to my first blog!',
            description: 'Allow me to introduce myself & the content you can expect from me in my blogs. Primarily I will focus on delivering tech driven content, mostly about web development, but I have few ideas about project organization, agile methodology & much more!',
            imgURL: 'assets/img/blogs/1.Welcome/1.Welcome-header.jpg',
            destination: 'pages/blogs/welcome-blog.html'
        },
        {
            id: 2,
            name: 'JS Pattern that changed everything!',
            description: 'Allow me to introduce you to one of my favorite javascript design patterns that I learned with the help of Addy Osmanis Javascript Design Patterns book. It helped me a lot to keep my js in check & hope you will find it useful as well.',
            imgURL: 'assets/img/blogs/2.MRP/javascript-illustration.png',
            destination: 'https://dev.to/jonathanbrickwell/javascript-pattern-that-changed-everything-for-me-4cfa'
        }
    ]

    var initialize = function() {
        var contentOfBlogs = blogs;
        return contentOfBlogs;
    }

    return {
        data: initialize
    }
})();
