$(document).ready(function() {
    
    const main = document.querySelector('.main');
    const preloader = document.querySelector('.preloader');
    const preloader_img = document.querySelector('.preloader_img');
    const preloader_button = document.querySelector('.preloader_button');
    const audio = document.querySelector('.audio');

    
    main.style.display = "none";
    audio.style.display = "none";
    $(".preloader_button").on( "click", function() {
        main.style.display = "block";
        setTimeout(function() {
            preloader.style.display = "none";
        }, 2000);
    });
    $(".preloader_button").on( "click", function() {
        main.style.display = "block";
        setTimeout(function() {
            audio.style.display = "block";
        }, 500);
    });
});