  document.addEventListener("DOMContentLoaded", function () {

      function showMenu() {
          $('header').css({
              display: 'none'
          });

          $("#menu").click(function () {
              $("header").toggle(200);
          });
      }

      showMenu();
  });