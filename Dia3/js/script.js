(function(){
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    var timeout    = 500;
    var closetimer = 0;
    var ddmenuitem = 0;

    function jsddm_open()
    {  jsddm_canceltimer();
        jsddm_close();
        ddmenuitem = $(this).find('ul').css('visibility', 'visible');}

    function jsddm_close()
    {  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

    function jsddm_timer()
    {  closetimer = window.setTimeout(jsddm_close, timeout);}

    function jsddm_canceltimer()
    {  if(closetimer)
    {  window.clearTimeout(closetimer);
        closetimer = null;}}

    $(document).ready(function()
    {  $('.menuDrop > li').bind('mouseover', jsddm_open)
        $('.menuDrop > li').bind('mouseout',  jsddm_timer)});

    document.onclick = jsddm_close;

}());