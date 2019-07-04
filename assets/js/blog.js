const blogs = [
    {
        id: 1,
        name: 'Welcome to my first blog!',
        description: 'Allow me to introduce myself & the content you can expect from me in my blogs...',
        imgURL: 'assets/img/blogs/1.Welcome/1.Welcome-banner.jpg'
    }
]

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


function _setData(_html) {
    var blogContentContainer = document.querySelector('.blog-content-section');
    blogContentContainer.innerHTML = _html;
}