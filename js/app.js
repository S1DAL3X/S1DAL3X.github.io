AOS.init();

var menuList = document.querySelector('.header__menu');
var burger = document.querySelector('.burger');

function navToggle(){
    if(menuList.classList.contains('show')){
        menuList.classList.remove('show');
        burger.classList.remove ('close');
    } else{
        menuList.classList.add('show');
        burger.classList.add('close');
    }
}