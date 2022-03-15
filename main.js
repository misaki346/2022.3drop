$(".openbtn").click(function(){
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav").click(function(){
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});
