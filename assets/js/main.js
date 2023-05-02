
jQuery(document).ready(function ($) {
    windowHeight = jQuery(window).innerHeight();
  
    jQuery('.MainImage').css('height', (windowHeight-1)+'px');

    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
    
        if (scroll >= 100) {
          jQuery("body").addClass("StickHeader");
        } else {
          jQuery("body").removeClass("StickHeader");
        }
    });

    if (jQuery(window).width() < 1000) {
        jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
        })
        .fadeIn(400);
    }
    else {
      jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
        })
        .fadeIn(400);
    }

    jQuery(".OverLay , .openpopup , .Contactusnow").click(function () {
      jQuery("body").toggleClass("activeform");
      jQuery("body").removeClass("pop3active");
    });
});