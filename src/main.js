  var scrollLink = $(".scroll")

  //smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $(this.hash).offset().top - 55
    }, 1500
    )
  })

  //switch active link
  $(window).scroll(function(e){
    var scrollBarLocation = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top - 90;

      if (sectionOffset <= scrollBarLocation && scrollBarLocation <= sectionOffset * 2){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
      }

    })

  })
