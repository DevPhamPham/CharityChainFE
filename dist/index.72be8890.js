$(document).ready(function($1) {
    "use strict";
    // loader
    var loader = function() {
        setTimeout(function() {
            if ($1("#ftco-loader").length > 0) $1("#ftco-loader").removeClass("show");
        }, 1);
    };
    loader();
    var carousel = function() {
        $1(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            stagePadding: 5,
            nav: false,
            navText: [
                '<span class="icon-chevron-left">',
                '<span class="icon-chevron-right">'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    };
    carousel();
    // scroll
    var scrollWindow = function() {
        $1(window).scroll(function() {
            var $w = $1(this), st = $w.scrollTop(), navbar = $1(".ftco_navbar"), sd = $1(".js-scroll-wrap");
            if (st > 150) {
                if (!navbar.hasClass("scrolled")) navbar.addClass("scrolled");
            }
            if (st < 150) {
                if (navbar.hasClass("scrolled")) navbar.removeClass("scrolled sleep");
            }
            if (st > 350) {
                if (!navbar.hasClass("awake")) navbar.addClass("awake");
                if (sd.length > 0) sd.addClass("sleep");
            }
            if (st < 350) {
                if (navbar.hasClass("awake")) {
                    navbar.removeClass("awake");
                    navbar.addClass("sleep");
                }
                if (sd.length > 0) sd.removeClass("sleep");
            }
        });
    };
    scrollWindow();
    var counter = function() {
        $1("#section-counter").waypoint(function(direction) {
            if (direction === "down" && !$1(this.element).hasClass("ftco-animated")) {
                var comma_separator_number_step = $1.animateNumber.numberStepFactories.separator(",");
                $1(".ftco-number").each(function() {
                    var $this = $1(this), num = $this.data("number");
                    console.log(num);
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });
            }
        }, {
            offset: "95%"
        });
    };
    counter();
    var contentWayPoint = function() {
        var i = 0;
        $1(".ftco-animate").waypoint(function(direction) {
            if (direction === "down" && !$1(this.element).hasClass("ftco-animated")) {
                i++;
                $1(this.element).addClass("item-animate");
                setTimeout(function() {
                    $1("body .ftco-animate.item-animate").each(function(k) {
                        var el = $1(this);
                        setTimeout(function() {
                            var effect = el.data("animate-effect");
                            if (effect === "fadeIn") el.addClass("fadeIn ftco-animated");
                            else if (effect === "fadeInLeft") el.addClass("fadeInLeft ftco-animated");
                            else if (effect === "fadeInRight") el.addClass("fadeInRight ftco-animated");
                            else el.addClass("fadeInUp ftco-animated");
                            el.removeClass("item-animate");
                        }, k * 50, "easeInOutExpo");
                    });
                }, 100);
            }
        }, {
            offset: "95%"
        });
    };
    contentWayPoint();
    // navigation
    var OnePageNav = function() {
        $1(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on("click", function(e) {
            e.preventDefault();
            var hash = this.hash, navToggler = $1(".navbar-toggler");
            $1("html, body").animate({
                scrollTop: $1(hash).offset().top
            }, 700, "easeInOutExpo", function() {
                window.location.hash = hash;
            });
            if (navToggler.is(":visible")) navToggler.click();
        });
        $1("body").on("activate.bs.scrollspy", function() {
            console.log("nice");
        });
    };
    OnePageNav();
});

//# sourceMappingURL=index.72be8890.js.map
