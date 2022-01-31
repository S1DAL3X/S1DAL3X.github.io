$(function(){
   
    const worksSlider = $('[data-slider="slick"]');
    
    /* Filter */
    /* =========================================== */
    
    let filter =$("[data-filter]");
    
    filter.on("click", function(event){
        event.preventDefault();
        
        let cat = $(this).data("filter");
        
        if(cat == "all"){
            $("[data-cat]").removeClass("hide");
        }else{
            $("[data-cat]").each(function() {
                let workCat = $(this).data("cat");
                if(workCat != cat) {
                    $(this).addClass("hide");
                }else{
                    $(this).removeClass("hide");
                }
            });
        }
        
    });
    
    /* Smooth scroll */
    /* =========================================== */
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        var deviceWidth = $(window).width();
        
        var $this = $(this),
            blockId = $this.data("scroll");

            if(deviceWidth >= 991){
                blockOffset = $(blockId).offset().top - 40;
            }else{
                blockOffset = $(blockId).offset().top - 120;
            }
            //blockOffset = $(blockId).offset().top - 40;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    /* Modal */
    /* =========================================== */
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data("modal");
        
        $(modalId).addClass("show");
        $("body").addClass("no-scroll");
        
        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 100);
        
        worksSlider.slick("setPosition");
        
    });
    
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents(".modal");
        
        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        
        setTimeout(function() {
            modalParent.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 100);
    });
    
    
    $(".modal").on("click", function(event) {
        let $this = $(this);
        
        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        
        setTimeout(function() {
            $this.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 1500);
    });
    
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
    
    /* Slider: https://kenwheeler.github.io/slick/ */
    /* =========================================== */
    
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    $(".slickPrev").on("click", function(event){
        event.preventDefault();
        
        let curentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        curentSlider.slick("slickPrev");
    });
    
    $(".slickNext").on("click", function(event){
        event.preventDefault();
        let curentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        curentSlider.slick("slickNext");
    });
    
    /* Burger */
    /* =========================================== */
    
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    });
   
});