$(document).ready(function () {

  $(window).resize(function () {
    let lebarwindow = $(window).innerWidth();
    if (lebarwindow >= 768) {



      $(".DmenuKejuruan").css("opacity", '0');
      $(".DmenuKejuruan").css("display", 'none');
      $(".DmenuLembaga").css("opacity", '0');
      $(".DmenuLembaga").css("display", 'none');


      $("#DmenuKejuruanLink").mouseenter(function (e) {
        $(".DmenuKejuruan").css("display", 'inline');
        $(".DmenuKejuruan").css("opacity", '1');
      });
      $("#DmenuKejuruanLink").mouseleave(function () {
        this.children[1].style.display = "none";
      });



      //   
      $("#DmenuLembagaLink").mouseenter(function (e) {
        $(".DmenuLembaga").css("display", 'inline');
        $(".DmenuLembaga").css("opacity", '1');
      });

      $("#DmenuLembagaLink").mouseleave(function () {
        this.children[1].style.display = "none";
      });

    }
  });


});
