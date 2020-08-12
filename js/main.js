jQuery(document).ready(function($) {
    // Scroll to top button size
    var size = $( '.languages_block' ).width();
    $( '.scroll_to_top' ).height(size).width(size);
    
    $(document).on("scroll", window, function () {
        if ($(window).scrollTop()>200){
            $(".scroll_to_top").show().css('display', 'flex');
        } else{
            $(".scroll_to_top").hide();
        }
     });
    $('.scroll_to_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
    // MOBILE MENU SETTINGS
    $('.mobile_menu').click(function(){
      $('.mobile').addClass('active');
      $('header, main, footer').addClass('blur');
        })
        $('.close_mob_menu').click(function(){
          $('header, main, footer').removeClass('blur');
          $('.mobile').removeClass('active');
        })
        $(document).click(function(e){
          if( 
            $('.mobile').hasClass('active') && 
            $('.mobile_menu').has(e.target).length == 0 &&
            $('.mobile').has(e.target).length == 0
          )
          {
            $('header, main, footer').removeClass('blur');
            $('.mobile').removeClass('active');
          }
      });

    // modal
    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>')
    });
    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).parents(".overlay").addClass("open");
        setTimeout( function(){
            $(modal).addClass("open");
        }, 350);
        
        $(document).on('click', function(e){
            var target = $(e.target);
            
            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each( function(){
                    $(this).removeClass("open");
                });
                setTimeout( function(){
                    $(target).removeClass("open");
                }, 350);
            }
            
        });
        
    });
    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).removeClass("open");
        setTimeout( function(){ 
            $(modal).parents(".overlay").removeClass("open");
        }, 350);
        
    });
  });