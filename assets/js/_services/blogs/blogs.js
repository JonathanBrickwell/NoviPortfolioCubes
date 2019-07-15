var AllBlogs = (function() {

    // blogContent receives the array of objects defined in all-blogs.js
    // I'll have to figure out a better way to encapsulate this data
    var blogContent = blogsContainer.data();

    // This function primarily deales with looping through the data and sending it to _setData function.
    var _getBlogData = function() {

        var html = '';

        for(let i = 0; i < blogContent.length; i++) {
            html += '<div class="col-lg-6 col-md-6 col-sm-12 mb-4">';
            html += '<a class="card anchor">';
            html += '<a class="anchor" href="' + blogContent[i].destination + '"><img class="card-img-top img-fluid" src="' + blogContent[i].imgURL + '" alt=""></a>';
            html += '<div class="card-body">';
            html += '<h3 class="card-title">';
            html += blogContent[i].id + ". ";
            html += '<a class="anchor" href="' + blogContent[i].destination + '">"' + blogContent[i].name + '"</a>';
            html += '</h3>';
            html += '<p class="main-text">"' + blogContent[i].description + '"</p>';
            html += '</div>';
            html += '</a>';
            html += '</div>';
        }
        return html;
    };

    // This is a function that will be passed as the init public function, the one to rule them all.
    var setData = function() {
        var blogContentContainer = document.querySelector('.blog-content-section');
        blogContentContainer.innerHTML = _getBlogData();
    };

    // return serves as the mechanism that returns (who would've guessed) the publicFuncition as init
    return { 
        init: setData
     }

})();

// With this we can access the init property which is actually our publicFunction that rules them all!
AllBlogs.init();
