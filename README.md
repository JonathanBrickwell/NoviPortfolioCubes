# New Portfolio

Welcome to my newly designed web portfolio! 

There comes a time in every developers life when he/she/uncertain wants to present the fruit of his/her/this_is_hard labor to the world, and such a time came for me. 
My old portfolio was crumbling down from poor javascript architecture and unorganised css code. It was so beautiful at the beginning, but over time it turned every developers worst nightmare.
So I decided to take matters into my own hands and put an end to this nonsense once and for all. 

This portfolio was made using :

1. HTML
2. SCSS
3. Good ol' vanilla Javascript
4. Bootstrap
5. A shit ton of investigation 

## Architecture - Key points

1. app

    1.1. This folder consists of two subfolders - _data and _modules

    1.1.1. -> _data
        - Contains containers in which I'll be storing the const values for blogs & other components.
        - The containers are wrapped in a Module Revealing Pattern, which means that the array declared within the scope cannot be changed from the outside.
        - If you want to access the array of objects defined within the scope, you will have to call the public function which is returned as ,,data''. 
        - Example of the call : blogsContainer.data();

    1.1.2. -> _modules
        - Modules act as functions which access and manipulate the data defined within the _data folder.
        - With the function _getBlogData() we loop through the object and define the HTML structure for the defined section.
        - _getBlogData() function passess the defined HTML structure to the _setData() which renders the structure within the index.html.

    1.2. Authors note
        - This way of communication helps me in organizing certain parts of the application which would repeate constantly if I were to write pure HTML.
        - For example : if I want to add another set of blogs, I just need to create another object within the ,,blogs'' array with the appropriate values, and the HTML will be dynamically rendered in the index.html file.
        - Of course, this is far from ideal situation I want to be in, but it enables me to quickly and cleanly adjust the content.

