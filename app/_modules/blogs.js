var AllBlog = (function() {

    var _privateFunction = function() {
        console.log("Ovo je privatna funkcija.");
        console.log(blogs);
    };

    var publicFunction = function() {
        _privateFunction();
    };

    return { 
        init: publicFunction
     }

})();

AllBlog.init();
