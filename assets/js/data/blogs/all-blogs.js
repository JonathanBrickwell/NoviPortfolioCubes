// With this I plan on encapsulating data more, so it can't be changed from the outside and my blog content is preserved
// No one from the outside can do blogs[0].id = 3 and change the id value of our blog from the outside.
var blogsContainer = (function() {

    var blogs = [
        {
            id: 1,
            name: 'Welcome to my first blog!',
            description: 'Allow me to introduce myself & the content you can expect from me in my blogs...',
            imgURL: 'assets/img/blogs/1.Welcome/1.Welcome-banner.jpg',
            destination: 'pages/blogs/welcome-blog.html'
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
