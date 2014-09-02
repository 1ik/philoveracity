$(function() {
    $('header, nav.slide').hover(function() {
        $('header').toggleClass('hovered');
        $('nav.slide').toggleClass('hovered');
    }, function() {
        $('header').toggleClass('hovered');
        $('nav.slide').toggleClass('hovered');
    });

});