

$(document).ready(function(){

    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
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


