// With this I plan on encapsulating data more, so it can't be changed from the outside and my blog content is preserved
// No one from the outside can do blogs[0].id = 3 and change the id value of our blog from the outside.
var blogsContainer = (function() {

    

    var initialize = function() {
        var contentOfBlogs = blogs;
        return contentOfBlogs;
    }

    return {
        data: initialize
    }
})();
