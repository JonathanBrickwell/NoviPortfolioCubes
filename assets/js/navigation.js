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