// JavaScript for footer hover effect
document.addEventListener("DOMContentLoaded", function() {
    var footerLinks = document.querySelectorAll(".w3-footer a");
    footerLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.opacity = "0.6";
        });
        link.addEventListener("mouseout", function() {
            this.style.opacity = "1";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000, // Slide every 2 seconds
        },
    });
});


