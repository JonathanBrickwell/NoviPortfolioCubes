// Getting the list of all items that contain the class .sidenav, there should be 6 of them
var menuItems = document.getElementsByClassName('boxes');
// Getting the list of all the close button items, so that we can apply an event listener on each one of them later.
var closeButtons = document.getElementsByClassName('closebtn');
// Getting the list of all the sidenav items
var sidenavContent = document.getElementsByClassName('sidenav');

// Here I wanted to store my local variables, just because I don't want to constantly instantiate or call the variables for these kind of values.
var clickedItem = '';
var activeSidenavElement = '';
var activeClass = 'active';

// I need to wrap this into a function, but here we're getting the siblings of the clicked element.
// Because we're going to send that element to our findSibling() function to add an active class.
for(var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    clickedItem = this.nextElementSibling;
    clickedItem.classList.add('active');
    findActiveElement();
  });
}

// This function finds the sidenav element with an active class, stores a reference to it and sends it to another function
// Due to pure function principle, I wanted to seperate the logic of searching for an active element and removing the active class from its class list. Therefore we have two functions.
function findActiveElement() {
  for(var i = 0; i < sidenavContent.length; i++) {
    if(sidenavContent[i].classList.contains(activeClass)) {
      activeSidenavElement = sidenavContent[i];
      // We pass the element with an active class to our function that deals with removing the active class.
      applyClickOnCloseButton(activeSidenavElement);
    }
  }
}

// This function receives the element that contains an active class and removes it.
function applyClickOnCloseButton(activeSidenavItem) {
  for(var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      activeSidenavItem.classList.remove(activeClass);
    });
  }
}
