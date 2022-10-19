window.onload = function() {
    
    setTimeout(function() {
    
    //Добавление body класса loaded после 200ms
    document.body.classList.add('loaded');
        
    //Draggable - библиотека для свободного перемещения в div
    //Применяется для div gallery
    //bounds - параметр для "отскока" от края div
    //inertia применяется совместно с библиотекой InertiaPlugin для плавного "инерционного" перемещения
    Draggable.create('.gallery', {
        bounds: 'body',
        inertia: true
    });
        
    }, 800)
    
}
