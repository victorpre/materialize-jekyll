(function($){
  $(function(){
    // Masonry Grid
    var $container = $('#masonry-grid');

    // initialize
    $container.masonry({
      columnWidth: '.col:not([style*="display: none"])',
      itemSelector: '.card-wrapper',
      horizontalOrder: true
    });

    // Show/reveal cards
    $(".tag-name").click(function(el){
      el.preventDefault();
      const tag = $(this).data("tag");
      var $chips = $("[data-tag="+tag+"] > .chip");
      var $cards = {};
      if ($chips.hasClass("active")){
        $chips.toggleClass("active");
        if ($(".active").size()){
          $cards = $('.card-wrapper[style*="display: none"]').filter(function() {
            return $(".active", this).size();
          });
        }else{
          $cards = $('.card-wrapper[style*="display: none"]');
        }
      }else{
        $chips.toggleClass("active");
        $cards = $('.card-wrapper:not([style*="display: none"])').not(function() {
          return $("[data-tag="+tag+"]", this).size();
        });
      }
      $cards.fadeToggle("800", "jswing", function(){
        $container.masonry('layout').masonry();
      });
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
