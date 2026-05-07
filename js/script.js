$(document).ready(function() {
    
    const main = document.querySelector('.main');
    const preloader = document.querySelector('.preloader');
    const preloader_img = document.querySelector('.preloader_img');
    const preloader_button = document.querySelector('.preloader_button');

    
    main.style.display = "none";
    $(".preloader_button").on( "click", function() {
        main.style.display = "block";
        setTimeout(function() {
            preloader.style.display = "none";
        }, 1500);
    });
    
});