var menuList = document.querySelector('.header__menu');
// var searchIcon = document.querySelector('.search');
var burger = document.querySelector('.burger');

function navToggle(){
    if(menuList.classList.contains('show')){
        menuList.classList.remove('show');
        // searchIcon.classList.remove('hide');
        burger.classList.remove ('close');
    } else{
        menuList.classList.add('show');
        // searchIcon.classList.add('hide');
        burger.classList.add('close');
    }
}