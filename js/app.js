$(".btn--previous").on("click", function() {
    $(".btn").prop("disabled", true).delay(1005).queue(function(disabled) {
        $(".btn").prop("disabled", false);
        disabled();
    });

    var currentSlideID = $(".section.active").data("slide-id");
    var $currentSlide = $("[data-slide-id='"+currentSlideID+"']");
    var previousSlideID = currentSlideID - 1;
    var $previousSlide = $("[data-slide-id='"+previousSlideID+"']");

    $currentSlide.addClass("slideOutRight")
                 .delay(1000)
                 .queue(function(removeClass) {
                     $(this).removeClass("active slideOutRight");
                     removeClass();
                 });
    $previousSlide.addClass("active slideInLeft")
              .delay(1000)
              .queue(function(removeClassOne) {
                  $(this).removeClass("slideInLeft");
                  removeClassOne();
              });

    if (previousSlideID == "0") {
        $currentSlide.addClass("slideOutRight")
            .delay(1000)
            .queue(function(removeClassFour) {
                $(this).removeClass("active slideOutRight");
                removeClassFour();
            });
        $("[data-slide-id='5']").addClass("active slideInLeft")
            .delay(1000)
            .queue(function(removeClassFive) {
                $(this).removeClass("slideInLeft");
                removeClassFive();
            });
    }
});

$(".btn--next").on("click", function() {
    $(".btn").prop("disabled", true).delay(1005).queue(function(disabled) {
        $(".btn").prop("disabled", false);
        disabled();
    });

    var currentSlideID = $(".section.active").data("slide-id");
    var $currentSlide = $("[data-slide-id='"+currentSlideID+"']");
    var nextSlideID = currentSlideID + 1;
    var $nextSlide = $("[data-slide-id='"+nextSlideID+"']");

    console.log(currentSlideID, nextSlideID);

    $currentSlide.addClass("slideOutLeft")
                 .delay(1000)
                 .queue(function(removeClassTwo) {
                     $(this).removeClass("active slideOutLeft");
                     removeClassTwo();
                 });
    $nextSlide.addClass("active slideInRight")
              .delay(1000)
              .queue(function(removeClassThree) {
                  $(this).removeClass("slideInRight");
                  removeClassThree();
              });

    if (nextSlideID == "6") {
        $currentSlide.addClass("slideOutLeft")
            .delay(1000)
            .queue(function(removeClassFour) {
                $(this).removeClass("active slideOutLeft");
                removeClassFour();
            });
        $("[data-slide-id='1']").addClass("active slideInRight")
            .delay(1000)
            .queue(function(removeClassFive) {
                $(this).removeClass("slideInRight");
                removeClassFive();
            });
    }
});