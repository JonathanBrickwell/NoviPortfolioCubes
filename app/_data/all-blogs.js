// With this I plan on encapsulating data more, so it can't be changed from the outside and my blog content is preserved
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
        const contentOfBlog = blogs;
        return contentOfBlog;
    }

    return {
        data: initialize
    }

})();