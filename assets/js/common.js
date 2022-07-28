$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-expand-lg");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });