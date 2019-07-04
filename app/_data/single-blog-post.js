var singleBlogPostContainer = (function() {

    var blogs = [
        {
            id: 1,
            name: "Prvi",
            description: "Opis prvog",
            content: "Something something",
            imgURL: "assets"
        },
        {
            id: 2,
            name: "Drugi",
            description: "Opis drugog",
            content: "Something something",
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