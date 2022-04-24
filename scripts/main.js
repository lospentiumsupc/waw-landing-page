console.log("[main.js] Test main.js");

window.addEventListener("load", () => {
    window.onscroll = function () {
        scrollFunction();
        scrollFunctionBTT(); // back to top button
    };

    window.onload = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.documentElement.scrollTop > 30) {
            document
                .getElementById("navbarExample")
                .classList.add("top-nav-collapse");
        } else if (document.documentElement.scrollTop < 30) {
            document
                .getElementById("navbarExample")
                .classList.remove("top-nav-collapse");
        }
    }
    /* Image Slider - Swiper */
    new Swiper(".image-slider", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 50,
        slidesPerView: 5,
        breakpoints: {
            // when window is <= 575px
            575: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window is <= 767px
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window is <= 991px
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            // when window is <= 1199px
            1199: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
    /* Back To Top Button */
// Get the button
    myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    function scrollFunctionBTT() {
        if (
            document.body.scrollTop > 10 ||
            document.documentElement.scrollTop > 10
        ) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }

// When the user clicks on the button, scroll to the top of the document
    document.getElementById("myBtn").onclick = topFunction;
    function topFunction() {
        document.body.scrollTop = 0; // for Safari
        document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    }
});


