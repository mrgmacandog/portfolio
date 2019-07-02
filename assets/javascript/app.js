// Code is executed in strict mode
"use strict";

// When the page is ready
$(document).ready(function () {
    // Animate scroll to 
    function ascrollto(id) {
        // 56 is the height of the navbar
        let etop = $('#' + id).offset().top - 56;
        $('html, body').animate({
            scrollTop: etop
        }, 250);
    }

    // Update nav bar link depending on scroll position
    function checkScrollPos() {
        // Top of portfolio section including navbar
        let portfolioTop = $("#portfolio-title").offset().top - 56;
        // Top of contact section including navbar
        let contactTop = $("#contact-title").offset().top - 56.71875;
        // Top of window
        let windowpos = $(window).scrollTop();

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
        let section = this.text.toLowerCase() + "-title";
        // Scroll to section
        ascrollto(section);
    });

    // When the user scrolls
    $(window).scroll(function () {
        // Check scroll position
        checkScrollPos();
    });

    // Check scroll position when the document is ready
    checkScrollPos();

});