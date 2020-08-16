jQuery(document).ready(function($) {
    // Scroll to top button size
    var size = $( '.languages_block' ).width();
    if(document.documentElement.clientWidth > 1000){
      $( '.scroll_to_top' ).height(size).width(size);
    } else if(document.documentElement.clientWidth <= 1000 && document.documentElement.clientWidth > 500){
      $( '.scroll_to_top' ).height(100).width(100);
      $( '.scroll_to_top img' ).width(16);
    } else{
      $( '.scroll_to_top' ).height(60).width(60);
      $( '.scroll_to_top img' ).width(12);
    }
    // Show button scroll to top
    $(document).on("scroll", window, function () {
        if ($(window).scrollTop()>200){
            $(".scroll_to_top").show().css('display', 'flex');
        } else{
            $(".scroll_to_top").hide();
        }
     });
    //  Animation of button scroll to top
    $('.scroll_to_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
    // MOBILE MENU SETTINGS
    $('.mobile_menu').click(function(){
      $('.mobile').addClass('active');
        })
        $('.close_mob_menu').click(function(){
          $('.mobile').removeClass('active');
        })
        $('.mobile .wrap a').click(function(){
          $('.mobile').removeClass('active');
        })
        $(document).click(function(e){
          if( 
            $('.mobile').hasClass('active') && 
            $('.mobile_menu').has(e.target).length == 0 &&
            $('.mobile').has(e.target).length == 0
          )
          {
            $('.mobile').removeClass('active');
          }
      });
    //   popups
      $('.get_start_popup').magnificPopup({
        type:'inline',
        closeOnBgClick:false,
        showCloseBtn: false,
        closeBtnInside: false
      });
      $('.view_3d_tour_popup').magnificPopup({
        type:'inline',
        closeOnBgClick:false,
        showCloseBtn: false,
        closeBtnInside: false
      });
      $('.show_map_popup').magnificPopup({
        type:'inline',
        closeOnBgClick:false,
        showCloseBtn: false,
        closeBtnInside: false
      });
      // close
      $('.my-custom-close').click(function(){
        //This will close popup dialog opened using $.magnificPopup.open()
        $.magnificPopup.close();
        });
      // input attach files 
      var inputs = document.querySelectorAll( '.inputfile' );
      Array.prototype.forEach.call( inputs, function( input )
      {
      var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener( 'change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
          label.querySelector( 'span' ).innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
      // Firefox bug fix
      input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
      input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
    
    //   scroll animation
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 50}, 1000);
    });
    $(function(){
        $('.scroll_to_why_delivery').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#why_delivery_only').offset().top - 50 }, 1000);
          e.preventDefault();
        });
    });

    $(function(){
        $('.scroll_to_partners').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#partners').offset().top - 50 }, 1000);
          e.preventDefault();
        });
    });

//  slider
  $('.slider').slick({
      autoplay: true, 
      autoplaySpeed: 3000,
      dots: false,
      fade: true,
      slidesToShow: 1,
      arrows: true,
      nextArrow: '<img class="desktop_arrow arrow_next" src="img/arrow_right.svg" alt="slide">',
      prevArrow: '<img class="desktop_arrow arrow_prev" src="img/arrow_left.svg" alt="slide">'
    });

        // Animation 
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $current = $('.slider .slick-slide[data-slick-index='+ currentSlide+']');
        $next = $('.slider .slick-slide[data-slick-index='+ nextSlide+']');

        $current.find('.slider_photo').css('opacity', '0');
        $current.find('.plashka_wrap').css('opacity', '0');
        $next.find('.slider_photo').css('opacity', '0');
        $next.find('.plashka_wrap').css('opacity', '0');
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $current = $('.slider .slick-slide[data-slick-index='+ currentSlide+']');
        $current.find('.plashka_wrap').animate({opacity: 1},400);
        $current.find('.slider_photo').animate({opacity: 1},400);
    });
});