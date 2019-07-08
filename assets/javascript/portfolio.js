function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}

// window.onload = function () {
//     setTimeout(function () {
//         PopUp('show');
//     }, 1500);
// } 

$("#popup_button").on("click", function () {
    $("#ac-wrapper").css("display", "none");
})

$('.show-btn').on('click', function () {
    $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
});

$('.card-reveal .close').on('click', function () {
    $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
});