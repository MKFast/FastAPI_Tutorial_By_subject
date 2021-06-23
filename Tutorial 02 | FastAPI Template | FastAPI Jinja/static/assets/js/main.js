
(function ($) {
    "use strict";
    /*--document ready functions--*/
    jQuery(document).ready(function ($) {

    /*---------------------
        Nice Select
    --------------------- */
    $('select').niceSelect(); 

    /*---------------------
        Cart Dropdown 
    --------------------- */
    var iconCart = $('.mini-cart-warp');
    iconCart.on('click', function() {
        $('.mini-cart-content').toggleClass('cart-visible');
    });
    /*---------------------
        Toggle Search Bar
    --------------------- */
    $(".search_list > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_search').slideToggle('medium');
    }); 

 

    /*---------------------
        Mobile Menu Active
    --------------------- */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
    });
    

    /*---------------------
        Main Slider Active
    --------------------- */
    $('.slider-active-3').owlCarousel({
        loop: true,
        nav: false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })  

    /*---------------------
        Main Slider Active
    --------------------- */
    $('.slider-home-16').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*---------------------------
       Best Sell Slider Active
    ------------------------------ */
    $('.best-sell-slider').owlCarousel({
            autoplay :   false,
            loop: false,
            smartSpeed : 1000,
            nav :  true ,
            dots :  false ,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                500:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                }
            }
    })


    /*---------------------------
       Best Sell Slider 2 Active
    ------------------------------ */
    $('.best-sell-slider-2').owlCarousel({
            autoplay :   false,
            loop: false,
            smartSpeed : 1000,
            nav :  true ,
            dots :  false ,
            margin:0,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                500:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                }
            }
    })

    /*---------------------------
       Category Slider Active
    ------------------------------ */
    $('.category-slider').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            loop: false,
            nav :  true ,
            dots :  false ,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                767:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:3,
                }
            }
    })
    /*---------------------------
       Best Sell Slider Active
    ------------------------------ */
    $('.category-slider-2').owlCarousel({
            autoplay :   false,
            loop: false,
            smartSpeed : 1000,
            nav :  true ,
            dots :  false ,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                500:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                }
            }
    })


    /*---------------------------
       Hot Deal Slider Active
    ------------------------------ */
    $('.hot-deal').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:1,
            margin:0,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
            }
    })

    /*---------------------------
       New Product Slider Active
    ------------------------------ */
    $('.new-product-slider').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:4,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                    
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                500:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1024:{
                    items:2,
                },
                1200:{
                    items:3,
                },
                1300:{
                    items:4,
                }
            }
    })


    /*---------------------------
       New Product Slider Active
    ------------------------------ */
    $('.new-product-slider-2').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:4,
            margin:0,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                    
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                500:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1024:{
                    items:2,
                },
                1200:{
                    items:3,
                },
                1300:{
                    items:4,
                }
            }
    })

    /*---------------------------
       Feature Product Slider Active
    ------------------------------ */
    $('.feature-slider').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:4,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:3,
                },
                1300:{
                    items:4,
                },
            },
    })

    /*---------------------------
       Recent Product Slider Active
    ------------------------------ */
    $('.recent-product-slider').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:4,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                500:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                },
                1300:{
                    items:6,
                }
            }
    })

    /*---------------------------
       Brand Slider Active
    ------------------------------ */
    $('.brand-slider').owlCarousel({
            autoplay :   false,
            nav :  true ,
            loop: false,
            smartSpeed : 1000,
            dots :  false ,
            items:5,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                }
            }
    })

    /*---------------------------
       Testimonial Slider Active
    ------------------------------ */
    $('.testi-slider').owlCarousel({
            autoplay :   false,
            nav :  false ,
            smartSpeed : 1000,
            dots :  true ,
            items:2,
            margin:30,
            responsive:{
                0:{
                    items:1,
                },
                360:{
                    items:1,
                    margin:0,
                },
                576:{
                    items:1,
                    margin:0,
    
                },
                768:{
                    items:1,
                    margin:0,
                },
                992:{
                    items:2,
                },
                1200:{
                    items:2,
                }
            }
    })

    /*---------------------------
       Blog Slider Active
    ------------------------------ */
    $('.blog-slider-active').owlCarousel({
            autoplay :   false,
            nav :  true ,
            smartSpeed : 1000,
            dots :  false ,
            items:3,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay :true,
                },
                360:{
                    items:1,
                    autoplay :true,
                },
                576:{
                    items:1,
                    autoplay :true,
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
    })

    /*----------------------------------
       Feature Product Slider 2 Active
    ------------------------------------ */
    $('.feature-slider-2').owlCarousel({
            autoplay :   false,
            nav :  true ,
            smartSpeed : 1000,
            dots :  false ,
            items:2,
            loop:false,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:2,
                },
                1000:{
                    items:1,
                },
                1200:{
                    items:1,
                },
                1300:{
                    items:2,
                }
            }
    })

    /*---------------------------
       Feature Product Slider Active
    ------------------------------ */
    $('.feature-slider-3').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:3,
            margin:0,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:3,
                },
                1300:{
                    items:3,
                },
            },
    })


    /*---------------------------
     Hot Deal Slider 2 Active
    ------------------------------ */
    $('.hot-deal-2').owlCarousel({
            autoplay :   false,
            nav :  true ,
            smartSpeed : 1000,
            dots :  false ,
            items:2,
            loop:false,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1200:{
                    items:2,
                }
            }
    })

    /*---------------------------
     Hot Deal Slider 2 Active
    ------------------------------ */
    $('.hot-deal-3').owlCarousel({
            autoplay :   false,
            nav :  true ,
            smartSpeed : 1000,
            dots :  false ,
            items:1,
            loop:false,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1200:{
                    items:1,
                }
            }
    })

    /*---------------------------------------
       products gallery image Slider Active
    ---------------------------------------- */

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        arrows: true,
        dots: false,
        margin:10,
    });

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: false,

    });

    

    /*--------------------------------
       Category Product Slider Active
    ---------------------------------- */
    $('.category-product-slider').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:4,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:2,
                },
                992:{
                    items:1,
                },
                1200:{
                    items:1,
                }
            }
    })

    /*--------------------------------
       Category Product Slider Active
    ---------------------------------- */
    $('.single-product-slider-active').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: true,
            dots :  false ,
            items:4,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:2,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:3,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:4,
                }
            }
    })


    /*--------------------------------
       Category Product Slider Active
    ---------------------------------- */
    $('.category-product-2').owlCarousel({
            autoplay :   false,
            smartSpeed : 1000,
            nav :  true ,
            loop: false,
            dots :  false ,
            items:1,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                360:{
                    items:1,
                    autoplay: true,
                    loop: true,
                },
                576:{
                    items:1,
                    autoplay: true,
                    loop: true,
    
                },
                768:{
                    items:1,
                },
                992:{
                    items:1,
                },
                1200:{
                    items:1,
                }
            }
    })


    /*--------------------------
            Product Zoom
    ---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });
    
    
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        arrows:false,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                Settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                Settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                Settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-3').slick({
        infinite: true,
        slidesToShow: 4,
        arrows:false,
        vertical: true,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                Settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                Settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                Settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*---------------------------
       Blog Gallery Slider Active
    ------------------------------ */

      $('.blog-gallery').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickview-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    
    
    $('.quickview-slide-active a').on('click', function() {
        $('.quickview-slide-active a').removeClass('active');
    })
    
      /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    

 /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    


  /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
    
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });

    
    $('.vertical-menu-toggle').on('click', function() {
        $('.open-menu-toggle').slideToggle(500);
    });

     /*--------------------  
     Category more toggle  
     ----------------------*/

    $(".vertical-menu li.hidden").hide();
       $("#more-btn").on('click', function (e) {

        e.preventDefault();
        $(".vertical-menu li.hidden").toggle(500);
        var htmlAfter = '<i class="ion-ios-minus-empty" aria-hidden="true"></i> Less Categories';
        var htmlBefore = '<i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories';


        if ($(this).html() == htmlBefore) {
            $(this).html(htmlAfter);
        } else {
            $(this).html(htmlBefore);
        }
    });

     /*--------------------  
     All Category toggle  
     ----------------------*/

        $(".category-toggle").click(function(){
            $(".category-menu").slideToggle("slow");
          });
        $(".menu-item-has-children-1").click(function(){
            $(".category-mega-menu-1").slideToggle("slow");
          });
        $(".menu-item-has-children-2").click(function(){
            $(".category-mega-menu-2").slideToggle("slow");
          });
        $(".menu-item-has-children-3").click(function(){
            $(".category-mega-menu-3").slideToggle("slow");
          });
        $(".menu-item-has-children-4").click(function(){
            $(".category-mega-menu-4").slideToggle("slow");
          });
        $(".menu-item-has-children-5").click(function(){
            $(".category-mega-menu-5").slideToggle("slow");
          });
        $(".menu-item-has-children-6").click(function(){
            $(".category-mega-menu-6").slideToggle("slow");
          });


    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hours</p></span> <span class="cdown minutes">%M <p>Mins</p></span> <span class="cdown second">%S <p>Sec</p></span>'));
        });
    });


   });

    /*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.sticky-nav').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.sticky-nav').removeClass('menu_fixed animated fadeInDown');
    }
  });
   
    /*---------------------------
       Window On Load Functions Active
    ------------------------------ */
    
      $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });


 

}(jQuery)); 
