AOS.init();
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        navigation:true,
        slideSpeed:5000,
        autoPlay:true
    });
});