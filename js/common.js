

$(document).ready(function(){

    $('.dd-ico').click(function(){
        $('.dd-min-menu-wrap').show(500);
    });
    $('.dd-close').click(function(){
        $('.dd-min-menu-wrap').hide(500);
    });

    $('.slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 5000
    });

    $('.has-tooltip').mouseover(function(){

        var tooltip_txt = $(this).attr('data-tooltip');
        var pos = $(this).offset();

        $(this).append('<div class="tooltip">' + tooltip_txt + '</div>')
        $('.tooltip').css({
            'top': pos.top + 20 + 'px',
            'left': pos.top + 42 + 'px'
        })
        $('.has-tooltip').mouseout(function(){
            $('.tooltip').remove();
        });

        $('span > .tooltip').css({
            'top': pos.top + 22 + 'px',
            'left': pos.top + 2 + 'px'
        })
    });

 });



