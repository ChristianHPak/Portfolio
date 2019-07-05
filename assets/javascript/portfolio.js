function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
// window.onload = function () {
//     setTimeout(function () {
//         PopUp('show');
//     }, 1500);
// } 

$("#popup_button").on("click", function() {
    $("#ac-wrapper").css("display", "none");
})

$(function(){
    $('#show').on('click',function(){        
        $('.card-reveal').slideToggle('slow');
    });
    
    $('.card-reveal .close').on('click',function(){
        $('.card-reveal').slideToggle('slow');
    });
});