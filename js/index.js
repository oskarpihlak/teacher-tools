(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict

function calculatePercentage() {
  var maxPoints = document.querySelector('#maxPoints').value;
  var currentPoints = document.querySelector('#recievedPoints').value;
  if (maxPoints != null && currentPoints != null) {
    var score = parseFloat(((currentPoints / maxPoints) * 100).toFixed(1));
    var grade = 5;
    console.log((score));
    document.querySelector('#scorePercentage').classList.remove('text-primary', 'text-success', 'text-warning', 'text-danger');
    if (90.0 <= score) {
      document.querySelector('#scorePercentage').classList.add('text-primary');
    } else if (75.0 <= score) {
      document.querySelector('#scorePercentage').classList.add('text-success');
      grade = 4;
    } else if (50.0 <= score) {
      document.querySelector('#scorePercentage').classList.add('text-warning');
      grade = 3;
    } else {
      document.querySelector('#scorePercentage').classList.add('text-danger');
      grade = 2;
    }
    document.querySelector('#scorePercentage').innerHTML = score + '% = ' + grade;
  }
}