var AllBlogs = (function() {

    // blogContent receives the array of objects defined in all-blogs.js
    // I'll have to figure out a better way to encapsulate this data
    //var blogContent = blogsContainer.data();

    var blogs = [
        {
            id: 1,
            name: 'Welcome to my first blog!',
            description: 'Allow me to introduce myself & the content you can expect from me in my blogs...',
            imgURL: 'assets/img/blogs/1.Welcome/1.Welcome-banner.jpg'
        }
    ]

    // This function primarily deales with looping through the data and sending it to _setData function.
    var _getBlogData = function() {

        var html = '';

        for(let i = 0; i < blogs.length; i++) {
            html += '<div class="col-lg-6 col-md-6 col-sm-12 mb-4">';
            html += '<div class="card h-100">';
            html += '<a href="#"><img class="card-img-top img-fluid" src="' + blogs[i].imgURL + '" alt=""></a>';
            html += '<div class="card-body">';
            html += '<h4 class="card-title">';
            html += blogs[i].id + ". ";
            html += '<a href="#">"' + blogs[i].name + '"</a>';
            html += '</h4>';
            html += '<p class="card-text">"' + blogs[i].description + '"</p>';
            html += '</div>';
            html += '</div>';
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
