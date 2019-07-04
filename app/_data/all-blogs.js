// With this I plan on encapsulating data more, so it can't be changed from the outside and my blog content is preserved
// No one from the outside can do blogs[0].id = 3 and change the id value of our blog from the outside.
var blogsContainer = (function() {

    var blogs = [
        {
            id: 1,
            name: "Prvi",
            description: "Opis prvog",
            imgURL: "assets"
        },
        {
            id: 2,
            name: "Drugi",
            description: "Opis drugog",
            imgURL: "assets"
        }
    ]

    var initialize = function() {
        const contentOfBlogs = blogs;
        return contentOfBlogs;
    }

    return {
        data: initialize
    }
})();