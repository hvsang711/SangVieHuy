$('.carousel').carousel()

// $('.owl-carousel').owlCarousel({
//     items:3,
//     loop:true,
//     center:true,
//     margin:10,
//     URLhashListener:true,
//     autoplayHoverPause:true,
//     startPosition: 'URLHash'
// });
//

$('.list-services-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})