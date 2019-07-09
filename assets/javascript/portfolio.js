// Pop up info, show and hide and timer
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}

window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 1500);
} 

$("#popup_button").on("click", function () {
    $("#ac-wrapper").css("display", "none");
})


// Porfolio Cards Sliding
$('.show-btn').on('click', function () {
    $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
});

$('.card-reveal .close').on('click', function () {
    $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
});


// Firebase for sign in
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwbA4Cw4-K3KqmVFcEshUkciVXwB_2Afo",
    authDomain: "portfolio-a1c19.firebaseapp.com",
    databaseURL: "https://portfolio-a1c19.firebaseio.com",
    projectId: "portfolio-a1c19",
    storageBucket: "",
    messagingSenderId: "1039607347392",
    appId: "1:1039607347392:web:07b63f392ee205e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);