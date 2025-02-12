
// view profile
$('.slid9').slick({
    autoplay: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    infinite: false,
    dots:true,
    responsive: [
          {
            breakpoint: 900,
            settings: {
            slidesToShow: 2,
            slidesToScroll:1,
            },
          },
          {
            breakpoint: 768,
            settings: 'unslick',
          },
    ],
});

$('.box2_slider').slick({
    autoplay: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots:true,
    responsive: [
          {
            breakpoint: 900,
            settings: {
            slidesToShow: 2,
            slidesToScroll:2,
            },
          },
          {
            breakpoint: 768,
            settings: 'unslick',
          },
    ],
});

// organisateur profil non inscrit
$('.organisateurs').slick({
  autoplay: false,
  speed: 250,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  dots:true,
  responsive: [
        {
          breakpoint: 900,
          settings: {
          slidesToShow:1,
          slidesToScroll:1,
          },
        },
        {
          breakpoint: 768,
          settings: 'unslick',
        },
  ],
});

// pages testimonials
$('.section4_testimonials').slick({
  autoplay: false,
  speed: 250,
  slidesToShow: 1,
  slidesToScroll:1,
  arrows: true,
  infinite: false,
  dots:true,
  responsive: [
        {
          breakpoint: 900,
          settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          },
        },
        {
          breakpoint: 768,
          settings: 'unslick',
        },
  ],
});
// page coordination
// $('.slide_slide').slick({
//   autoplay: false,
//   speed: 250,
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   arrows: true,
//   infinite: true,
//   dots:true,
//   responsive: [
//         {
//           breakpoint: 900,
//           settings: {
//           slidesToShow: 3,
//           slidesToScroll:1,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: 'unslick',
//         },
//   ],
// });