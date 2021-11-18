$(document).ready(function () {
    "use strict";

    $(".footer_content_desktop_other_top_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    }); 

    $(".footer_content_mobile_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $('.certificate_list').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: true,
        prevArrow: $('.certificate_prev'),
        nextArrow: $('.certificate_next'),
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
          ]
    });

    $(".scroll_to_home").click(function(e) {
        e.preventDefault();
        if($(window).width() < 1199) {
            $('html, body').animate({
                scrollTop: $(".main").offset().top - 90
            }, 2000);
        } else {
            $('html, body').animate({
                scrollTop: $(".main").offset().top - 172
            }, 2000);
        }        
    });

    $(".scroll_to_about").click(function(e) {
        e.preventDefault();
        if($(window).width() < 1199) {
            $('html, body').animate({
                scrollTop: $(".about").offset().top - 90
            }, 2000);
        } else {
            $('html, body').animate({
                scrollTop: $(".about").offset().top - 172
            }, 2000);
        } 
    });

    $(".scroll_to_services").click(function(e) {
        e.preventDefault();
        if($(window).width() < 1199) {
            $('html, body').animate({
                scrollTop: $(".service").offset().top - 90
            }, 2000);
        } else {
            $('html, body').animate({
                scrollTop: $(".service").offset().top - 172
            }, 2000);
        }
    });

    $(".scroll_to_reviews").click(function(e) {
        e.preventDefault();
        if($(window).width() < 1199) {
            $('html, body').animate({
                scrollTop: $(".reviews").offset().top - 90
            }, 2000);
        } else {
            $('html, body').animate({
                scrollTop: $(".reviews").offset().top - 172
            }, 2000);
        }
    });

    $(".scroll_to_contacts").click(function(e) {
        e.preventDefault();
        if($(window).width() < 1199) {
            $('html, body').animate({
                scrollTop: $(".contacts").offset().top - 90
            }, 2000);
        } else {
            $('html, body').animate({
                scrollTop: $(".contacts").offset().top - 172
            }, 2000);
        }
    });

    $(".popup_callback_close").click(function() {
        $(".popup_callback").removeClass("active");
        $(".back_modal").removeClass("active");
    });

    $(".back_modal").click(function() {
        $(".popup_callback").removeClass("active");
        $(this).removeClass("active");
    });

    $(".callback").click(function() {
        $(".popup_callback").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".service_list_item").click(function() {
        $(".popup_callback").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".header_dropdown_close").click(function() {
        $(".header_dropdown").removeClass("active");
    });

    $(".header_dropdown ul li a").click(function() {
        $(".header_dropdown").removeClass("active");
    });

    $(".header_content_mobile_burger").click(function() {
        $(".header_dropdown").addClass("active");
    });

});