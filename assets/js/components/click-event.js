let sections = document.getElementsByTagName('section');
sections[0].classList.add('active-section');

function displayNextSection() {
    let activeSection = document.querySelector('.active-section');
    if(activeSection) {
        if(activeSection.nextElementSibling != null) {
            activeSection.nextElementSibling.classList.add('active-section');
            activeSection.classList.remove('active-section');
        } else {
            sections[0].classList.add('active-section');
            activeSection.classList.remove('active-section');
        }
    }
}

function displayPreviousSection() {
    let activeSection = document.querySelector('.active-section');
    if(activeSection) {
        if(activeSection.previousElementSibling != null) {
            activeSection.previousElementSibling.classList.add('active-section');
            activeSection.classList.remove('active-section');
        }
    }
}

function activateNextMenuItem() {
    let menuItems = document.getElementsByClassName('menu-item');
    let activeItem = document.querySelector('.active');
    if(activeItem) {
        if(activeItem.nextElementSibling != null) {
            activeItem.nextElementSibling.classList.add('active');
            activeItem.classList.remove('active');
        } else {
            menuItems[0].classList.add('active');
            activeItem.classList.remove('active');
        }
    }
}

function activatePreviousMenuItem() {
    let activeItem = document.querySelector('.active');
    if(activeItem) {
        if(activeItem.previousElementSibling != null) {
            activeItem.previousElementSibling.classList.add('active');
            activeItem.classList.remove('active');
        }
    }
}

document.body.onkeydown = function(event){
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if(keycode === 40){
        activateNextMenuItem();
        displayNextSection();
    }
    if(keycode === 38) {
        activatePreviousMenuItem();
        displayPreviousSection();
    }
}
