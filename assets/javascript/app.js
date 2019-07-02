// Code is executed in strict mode
"use strict";

// When the page is ready
$(document).ready(function () {
    // Animate scroll to 
    function ascrollto(id) {
        let etop = $('#' + id).offset().top - 56;
        $('html, body').animate({
            scrollTop: etop
        }, 250);
    }

    // Update nav bar link depending on scroll position
    function checkScrollPos() {
        // Top of about section including margin
        // let aboutTop = $("#about").offset().top - 81;
        // Top of portfolio section including margin
        let portfolioTop = $("#portfolio").offset().top - 81;
        // Top of contact section including margin
        let contactTop = $("#contact").offset().top - 81;
        // Top of window
        let windowpos = $(window).scrollTop();
        console.log(windowpos);
        console.log(portfolioTop);

        // If scrolled to the contact section
        if (windowpos >= contactTop) {
            $("#about-link").removeClass("active");
            $("#portfolio-link").removeClass("active");
            $("#contact-link").addClass("active");
        // If scrolled to the portfolio section
        } else if (windowpos >= portfolioTop) {
            $("#about-link").removeClass("active");
            $("#portfolio-link").addClass("active");
            $("#contact-link").removeClass("active");
        // If scrolled to the about section or above
        } else {
            $("#about-link").addClass("active");
            $("#portfolio-link").removeClass("active");
            $("#contact-link").removeClass("active");
        }
    }

    // When a navbar link is clicked
    $(".nav-link").on("click", function () {
        // Save section clicked
        let section = this.text.toLowerCase();
        // Scroll to section
        ascrollto(section);
    });

    // When the user scrolls
    $(window).scroll(function () {
        // Check scroll position
        checkScrollPos();
    });

    /*
    // TODO: change to click for mobile
    // FIXME: Make all portfolio info disappear and portfolio images appear. Then switch "this" one
    // When a portfolio image is moused over
    $(".portfolio-image").on("mouseover", function () {
        // Hide all portfolio infos
        $(".portfolio-info").fadeOut(200, function () {
            $(".portfolio-image").fadeIn(200);
        });

        // Show all portfolio images

        // Hide the image
        $(this).fadeOut(200, function () {
            // Show the information
            $(this).next().fadeIn(200);
        });

        // $(this).hide();
        // $(this).next().show();
    });

    // TODO: change to click for mobile
    // When the information is moused out
    $(".portfolio-info").on("mouseleave", function () {
        // Hide the information
        $(this).fadeOut(200, function () {
            // Shoe the image
            $(this).prev().fadeIn(200);
        });

        // $(this).hide();
        // $(this).prev().show();
    });
    */

    // Check scroll position when the document is ready
    checkScrollPos();

    // $(".portfolio-info").css("height", `${$(".portfolio-image").height()}px`);
    // $(window).resize(function () {
    //     $(".portfolio-info").css("height", `${$(".portfolio-image").height()}px`);
    // });

});