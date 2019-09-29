var header = (function() {

    var _headerDesign = function() {
        var html = '';

        html += '<div class="main-navigation fixed-top">';
        html += '<div class="collapse dark-menu pt-4" id="navbarToggleExternalContent">';
        html += '<div class="menu-content">';
        html += '<ul class="nav justify-content-center">';
        html += '<li class="nav-item"><a href="about-me.html" class="nav-link">About me</a></li>';
        html += '<li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>';
        html += '<li class="nav-item"><a href="experience.html" class="nav-link">Experience</a></li>';
        html += '<li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>';
        html += '<li class="nav-item"><a href="contact-me.html" class="nav-link">Contact</a></li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
        html += '<nav class="navbar fixed dark-menu">';
        html += '<div class="navbar-container">'
        html += '<a class="navbar-brand" href="index.html">';
        html += '<img src="assets/img/homepage/HP-about.png" width="50" height="50" alt="Homepage brand logo">';
        html += '</a>';
        html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">';
        html += '<div class="menu-toggle ham"></div>';
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