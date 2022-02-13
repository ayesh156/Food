
/* ------------ Food Slider ------------ */

$(document).ready(function(){
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });

});

/* ------------ Mobile navigation ------------ */

document.querySelector('.nav-trigger').onclick = () => {
    document.querySelector('.site-content-wrapper').classList.toggle('scaled');
}