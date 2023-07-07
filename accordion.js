$(".accordion li h5").click(function () {
    var current_li = $(this).parent();
    $(".accordion li div").each(function(i,el) {			
      if($(el).parent().is(current_li)) {				
        $(el).prev().toggleClass("plus");
        $(el).slideToggle();				
      } else{
        $(el).prev().removeClass("plus");
        $(el).slideUp();
      }
    });
  });
  $('.accordion li > div').hide();
  $('.accordion li h5').first().addClass("plus");
  $('.accordion li > div').first().show().addClass("plus");