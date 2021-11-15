$(document).ready(function () {
    "use strict";

    $(".footer_content_desktop_other_top_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    }); 

    $(".footer_content_mobile_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
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

});