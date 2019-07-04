var AllBlogs = (function() {

    // blogContent receives the array of objects defined in all-blogs.js
    // I'll have to figure out a better way to encapsulate this data
    var blogContent = blogsContainer.data();

    // This function primarily deales with looping through the data and sending it to _setData function.
    var _getBlogData = function() {

        var html = '';

        for(let i = 0; i < blogContent.length; i++) {
            html += '<div class="col-lg-6 col-md-6 col-sm-12 mb-4">';
            html += '<div class="card h-100">';
            html += '<a href="#"><img class="card-img-top img-fluid" src="' + blogContent[i].imgURL + '" alt=""></a>';
            html += '<div class="card-body">';
            html += '<h4 class="card-title">';
            html += blogContent[i].id + ". ";
            html += '<a href="#">"' + blogContent[i].name + '"</a>';
            html += '</h4>';
            html += '<p class="card-text">"' + blogContent[i].description + '"</p>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        _setData(html);
    };

    // A function that acts like a set property, there's probably a better way to do this.
    var _setData = function(_html) {
        var blogContentContainer = document.querySelector('.blog-content-section');
        blogContentContainer.innerHTML = _html;
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
