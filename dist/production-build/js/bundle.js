let menuClicked = document.querySelector('.menu-toggle');
let hamClass = document.querySelectorAll('.ham');

var menu = (function() {
      
      var _clickEvent = function() {
        if(menuClicked) {
          menuClicked.addEventListener("click", function() {
            for(var i = 0; i < hamClass.length; i++) {
                hamClass[i].classList.toggle('newClass');
            }
          });
        }
      }

      var clickEventInit = function() {
        _clickEvent();
      }

      return {
        init: clickEventInit
      }

})();

menu.init();
var footer = (function() {

    var _footerDesign = function() {

        var html = '';
        html += '<div class="footer-content text-center">';
        html += '<small><b>Copyright &copy; Kristijan Fištrek</b></small>';
        html += '</div>';

        return html;
    }

    var render = function() {
        var footerContainer = document.querySelector('footer');
        footerContainer.innerHTML = _footerDesign();
    }

    return {
        init: render
    }

})();

footer.init();
var header = (function() {

    var _headerDesign = function() {
        var html = '';

        html += '<div class="main-navigation fixed-top">';
        html += '<div class="collapse dark-menu pt-4 pb-4" id="navbarToggleExternalContent">';
        html += '<div class="menu-content">';
        html += '<ul class="nav justify-content-center">';
        html += '<li class="nav-item"><a href="/about-me.html" class="nav-link">About me</a></li>';
        html += '<li class="nav-item"><a href="/projects.html" class="nav-link">Projects</a></li>';
        html += '<li class="nav-item"><a href="/music/music.html" class="nav-link">Music</a></li>';
        html += '<li class="nav-item"><a href="/experience.html" class="nav-link">Experience</a></li>';
        html += '<li class="nav-item"><a href="/blog.html" class="nav-link">Blog</a></li>';
        html += '<li class="nav-item"><a href="/contact-me.html" class="nav-link">Contact</a></li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
        html += '<nav class="navbar dark-menu">';
        html += '<div class="navbar-container">'
        html += '<a class="navbar-brand" href="/index.html">';
        html += '<img src="/assets/img/logo/Canvas.svg" width="50" height="50" alt="Homepage brand logo">';
        html += '</a>';
        html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">';
        html += '<div class="menu-toggle">';
        html += '<span class="ham ham-1"></span>';
        html += '<span class="ham ham-2"></span>';
        html += '<span class="ham ham-3"></span>';
        html += '</div>';
        html += '</button>';
        html += '</div>';
        html += '</nav>';
        html += '</div>';

        return html;
    }

    var render = function() {
        var headerContainer = document.querySelector('header');
        headerContainer.innerHTML = _headerDesign();
    }

    return {
        init: render
    }

})();

header.init();
// With this I plan on encapsulating data more, so it can't be changed from the outside and my blog content is preserved
// No one from the outside can do blogs[0].id = 3 and change the id value of our blog from the outside.
var blogsContainer = (function() {

    var blogs = [
        {
            id: 1,
            name: 'Welcome to my first blog!',
            description: 'Allow me to introduce myself & the content you can expect from me in my blogs. Primarily I will focus on delivering tech driven content, mostly about web development, but I have few ideas about project organization, agile methodology & much more!',
            imgURL: 'assets/img/blogs/1.Welcome/1.Welcome-header.jpg',
            destination: 'pages/blogs/welcome-blog.html'
        },
        {
            id: 2,
            name: 'JS Pattern that changed everything!',
            description: 'Allow me to introduce you to one of my favorite javascript design patterns that I learned with the help of Addy Osmanis Javascript Design Patterns book.',
            imgURL: 'assets/img/blogs/2.MRP/javascript-illustration.png',
            destination: 'https://dev.to/jonathanbrickwell/javascript-pattern-that-changed-everything-for-me-4cfa'
        }
    ]

    var initialize = function() {
        var contentOfBlogs = blogs;
        return contentOfBlogs;
    }

    return {
        data: initialize
    }
})();

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

AllBlogs.init();

var LatestBlogs = (function() {

    var blogsWrapper = blogsContainer.data();
    let latestBlog = blogsWrapper[blogsWrapper.length - 1];

    var _renderLatestBlog = function() {

        var html = '';

        html += '<div class="col-xl-8 col-lg-4 col-md-4 col-sm-12 text-center">';
            html += '<a href="'+ latestBlog.destination +'">';
                html += '<img class="img-fluid mb-3 mb-lg-0" src="' + latestBlog.imgURL +'" alt="Latest blog banner">';
            html += '</a>';
        html += '</div>';
        html += '<div class="col-xl-4 col-lg-8 col-md-8 col-sm-12">';
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
