var AllBlog = (function() {

    var blogContent = blogs;

    var _getBlogData = function() {
        for(let i = 0; i < blogContent.length; i++) {
            _setData(blogContent[i].id, blogContent[i].name, blogContent[i].description, blogContent[i].imgURL);
        }
    };

    var _setData = function(id, name, description, url) {
        _renderID(id);
        _renderTitle(name);
        _renderDescription(description);
        _renderImageUrl(url);
    }

    var _renderID = function(_id) {
        var incrementID = _id + 1;
       console.log(incrementID);
    }

    var _renderTitle = function(_title) {
        console.log(_title);
    }

    var _renderDescription = function(_description) {
        console.log(_description);
    }

    var _renderImageUrl = function(_url) {
        console.log(_url);
    }

    var publicFunction = function() {
        _getBlogData();
    };

    return { 
        init: publicFunction
     }

})();

AllBlog.init();
