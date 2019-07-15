var LatestBlogs = (function() {

    var blogsWrapper = blogsContainer.data();
    let latestBlog = blogsWrapper[blogsWrapper.length - 1];

    var _renderLatestBlog = function() {

        var html = '';

        html += '<div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 text-center">';
            html += '<a href="'+ latestBlog.destination +'">';
                html += '<img class="img-fluid mb-3 mb-lg-0" src="' + latestBlog.imgURL +'" alt="Latest blog banner">';
            html += '</a>';
        html += '</div>';
        html += '<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">';
            html += '<div class="featured-text text-center text-lg-left">';
                html += '<h4 class="main-text">';
                    html += '<a href="'+ latestBlog.destination +'" class="anchor">' + latestBlog.name + '</a>';
                html += '</h4>';
                html += '<p class="main-text mb-0">' + latestBlog.description + '</p>';
                html += '<button type="button" class="btn btn-light mt-2"><a class="hp-anchor" href="'+ latestBlog.destination +'">Read more</a></button>';
            html += '</div>';
        html += '</div>';

        return html;
    }

    var initialize = function() {
        var latestBlogContainer = document.querySelector('.latest-blog-wrapper');
        latestBlogContainer.innerHTML = _renderLatestBlog();
    };

    return { 
        init: initialize
     }

})();

LatestBlogs.init();
