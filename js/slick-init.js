$(document).ready(function() {
    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500
    });

    /*$('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        console.log(nextSlide);
        console.log(currentSlide);

        if ( currentSlide == 0 ) {
            console.log("la slide precedente era la prima");
        }
    });*/

    /*var currentSlide = $('.your-class').slick('slickCurrentSlide');
    console.log(currentSlide);*/


    /*$('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = currentSlide;
        var next = nextSlide;

        if ( current == 0 ) {
            console.log("RON ARAD (" + current + ")");
        }

        if ( current == 1 ) {
            console.log("PINCO PALLO (" + current + ")");
        }
    });*/

});

