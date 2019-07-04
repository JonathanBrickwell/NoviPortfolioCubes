var AllBlogs = (function() {

    // blogContent receives the array of objects defined in all-blogs.js
    // I'll have to figure out a better way to encapsulate this data
    var blogContent = blogsContainer.data();

    // This function primarily deales with looping through the data and sending it to _setData function.
    var _getBlogData = function() {
        for(let i = 0; i < blogContent.length; i++) {
            _setData(blogContent[i].id, blogContent[i].name, blogContent[i].description, blogContent[i].imgURL);
        }
    };

    // A function that acts like a set property, there's probably a better way to do this.
    var _setData = function(id, name, description, url) {
        _renderID(id);
        _renderTitle(name);
        _renderDescription(description);
        _renderImageUrl(url);
    }

    // Function for rendering the id of the blog in the HTML
    var _renderID = function(_id) {
        var incrementID = _id + 1;
       console.log(incrementID);
    }

    // Function for rendering the title of the blog in the HTML
    var _renderTitle = function(_title) {
        console.log(_title);
    }

    // Function for rendering the description of the blog in the HTML
    var _renderDescription = function(_description) {
        console.log(_description);
    }

    // Function for rendering the url of the blog in the HTML
    var _renderImageUrl = function(_url) {
        console.log(_url);
    }

    // This is a function that will be passed as the init public function, the one to rule them all.
    var publicFunction = function() {
        _getBlogData();
    };

    // return serves as the mechanism that returns (who would've guessed) the publicFuncition as init
    return { 
        init: publicFunction
     }

})();

// With this we can access the init property which is actually our publicFunction that rules them all!
AllBlogs.init();
