window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("d-header");

var nav =document.getElementById("nav")

// Get the offset position of the navbar
var sticky = nav.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
$( () => {
  
  //On <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> Functionality
  $(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('.nav').addClass('navShadow') : $('.nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
  });
  
  //Click Logo To Scroll To Top
  $('#logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0
    },500);
  });
  
  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function(e){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },500);
    e.preventDefault();
  });
  

  
});
