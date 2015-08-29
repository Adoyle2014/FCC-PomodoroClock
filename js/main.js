$(document).ready(function() {

    progressBar(10);





});


function progressBar(minutes) {
    var time = minutes*60000;
    $(".progress-bar").animate({
        width: "100%"
    }, time);

}