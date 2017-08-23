(function($){
  $(function(){
    //$('.button-collapse').sideNav();
    //$('.parallax').parallax();

    // Masonry Grid
    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });

    // Scroll Reveal
    window.sr = ScrollReveal();
    sr.reveal('.card');

    // Mobile button colapse
	function adjustIndex() {
      $('body').scrollTop(0);
      $("#sidenav-overlay").addClass("adjust-index");
    }

	$(".button-collapse").sideNav({
      menuWidth: 1000, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    $('.button-collapse').click(function(){
      adjustIndex();
    });

    // Change sharing icon when menu is opened
    $(".click-to-toggle").click(function(){
      var icon = $(this).find(".btn-floating > i");
      if ($(this).hasClass('active')) {
          icon.text("share");
      }else{
          icon.text("clear");
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
