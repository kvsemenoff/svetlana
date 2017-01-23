

$(document).ready(function(){

    $('.dd-ico, .dd-ico2, .dd-ico3').click(function(){
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

     $('a[name=modal]').click(function(e) {
                e.preventDefault();
                var id = $(this).attr('href');
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();
                $('#mask').css({'width':maskWidth,'height':maskHeight});
                $('#mask').fadeTo("slow",0.8); 
                var winH = $(window).height();
                var winW = $(window).width();
                posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
                $(id).css('top',  posTop+50);
                $(id).css('left', winW/2-$(id).width()/2);
                $(id).fadeIn(500); 
            });
            $('.window .dd-close').click(function (e) {
                e.preventDefault();
                $('#mask, .window').hide();
                $('.window').hide();
            }); 

            $('#mask, .an-exit__krest').click(function () {
                $('#mask').hide();
                $('.window').hide();
            }); 
            $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
            $(".form1").submit(function() { 
                var tel = $(this).find('input[name="phone"]');
                var empty = false;
                if (tel.val() == ""){
                    empty = true;
                }
                if (empty == true){
                    tel.addClass("error-input");
                    tel.focus();
                }else{
                    var form_data = $(this).serialize(); 
                    $.ajax({
                        type: "POST", 
                        url: "/sendmessage.php", 
                        data: form_data,
                        success: function() {
                            cleanTnanks(this);
                        }
                    });
                }
                return false;
});
            function cleanTnanks(form){
                $('input[type="text"]').removeClass("error-input");
                $("input[type=text], textarea").val("");
                $('.window').hide();                
                location = "spasibo.php";
            };
 });



