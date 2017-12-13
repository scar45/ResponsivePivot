// elements
var $page = $('.page');

$('.menu_open').hover(
  function(){
    $('#view-toc').addClass('tooltip-active');
  }, function() {
    $('#view-toc').removeClass('tooltip-active');
});

$('.menu_close').hover(
  function(){
    $('#view-content').addClass('tooltip-active');
  }, function() {
    $('#view-content').removeClass('tooltip-active');
});

$('#navPrev').hover(
  function(){
    $('#view-prev').addClass('tooltip-active');
  }, function() {
    $('#view-prev').removeClass('tooltip-active');
});

$('#navNext').hover(
  function(){
    $('#view-next').addClass('tooltip-active');
  }, function() {
    $('#view-next').removeClass('tooltip-active');
});

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
  $('.tooltip').removeClass('tooltip-active');
});

$('.content').on('click', function(){
  $page.removeClass('shazam');
});

// Special bind for tilde
$('html').keypress(function( event ) {
  if ( event.which == 96 ) {
     event.preventDefault();
     $page.toggleClass('shazam');
  }
});

$(document).ready(function(){

  // Put caret focus on the main content for easier readability
  $(".content_inner").focus();

  // Open all non-Zim backlinks in a new window/tab
  $("a[href^='http']").attr("target","_blank").addClass("external-link");


  // Back to top in article footer
  $('.scrollToTop').click(function(){
		$('.content_inner').animate({scrollTop : 0}, 420);
		return false;
	});

  // Keyboard navigation
  $(document).keydown(function(e) {
      switch(e.which) {

          case 37: // left
            $("#navPrev span").trigger("click");
          break;

          case 39: // right
            $("#navNext span").trigger("click");
          break;

// Uncomment if you prefer having up/down perform functions rather than default (scroll):
//
//          case 38: // up
//            $("#navHome span").trigger("click");
//          break;

//          case 40: // down
//            $page.toggleClass('shazam');
//          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });
});
