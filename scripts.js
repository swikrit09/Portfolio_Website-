$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // animation settings
        if ($(window).width() > 768) {

            // home section
            if (scrollY == 0) {
                $(".home-content").addClass("animationR")
                $("#profile1").addClass("animationL")

            } else {
                $(".home-content").removeClass("animationR")
                $("#profile1").removeClass("animationL")
            }
            // about section
            if (this.scrollY > 260) {
                $('.about').addClass("animationU")
            } else {
                $('.about').removeClass("animationU")
            }
            // achievement section
            if (this.scrollY > 750) {
                $('.serviceTitle').addClass("animationU")
            } else {
                $('.serviceTitle').removeClass("animationU")
            }
            if (this.scrollY > 1000) {
                $('.serv-content').addClass("animationU")
            } else {
                $('.serv-content').removeClass("animationU")
            }
            // skills section
            if (this.scrollY > 1400) {
                $('.skillTitle').addClass("animationU")
            } else {
                $('.skillTitle').removeClass("animationU")
            }
            if (this.scrollY > 1600) {
                $('.skillBar').addClass("animationL")
                $('.skillTxt').addClass("animationR")

            } else {
                $('.skillBar').removeClass("animationL")
                $('.skillTxt').removeClass("animationR")
            }
            // project section
            if (this.scrollY > 2050) {
                $('.projectTitle').addClass("animationU")
            }
            else {
                $('.projectTitle').removeClass("animationU")

            }
            if (this.scrollY > 2220) {
                $('.owl-carousel').addClass("animationU")


            } else {
                $('.owl-carousel').removeClass("animationU")
            }
            // contact section
            if (this.scrollY > 2775) {
                $('.contactTitle').addClass("animationU")

            } else {
                $('.contactTitle').removeClass("animationU")
            }
            if (this.scrollY > 2870) {
                $('.contactL').addClass("animationR")
                $('.contactR').addClass("animationL")

            } else {
                $('.contactL').removeClass("animationR")
                $('.contactR').removeClass("animationL")
            }
        }

        
        // phone animations
        else {
            // home section
            if (scrollY == 0) {
                $(".home-content").addClass("animationR")
                $("#profile1").addClass("animationL")

            } else {
                $(".home-content").removeClass("animationR")
                $("#profile1").removeClass("animationL")
            }
            // about section
            if (this.scrollY > 260) {
                $('.aboutTitle').addClass("animationU")
            } else {
                $('.aboutTitle').removeClass("animationU")
            }
            if (this.scrollY > 360) {
                $('#profile2').addClass("animationR")
            } else {
                $('#profile2').removeClass("animationR")
            }
            if (this.scrollY > 740) {
                $('.aboutContent').addClass("animationL")
            } else {
                $('.aboutContent').removeClass("animationL")
            }
            // achievement section
            if (this.scrollY > 1288) {
                $('.serviceTitle').addClass("animationU")
            } else {
                $('.serviceTitle').removeClass("animationU")
            }
            if (this.scrollY > 1568) {
                $('.c1').addClass("animationR")
            } else {
                $('.c1').removeClass("animationR")
            }
            if (this.scrollY > 1850) {
                $('.c2').addClass("animationL")
            } else {
                $('.c2').removeClass("animationL")
            }
            if (this.scrollY > 2130) {
                $('.c3').addClass("animationR")
            } else {
                $('.c3').removeClass("animationR")
            }
            // skills section
            if (this.scrollY > 2578) {
                $('.skillTitle').addClass("animationU")
            } else {
                $('.skillTitle').removeClass("animationU")
            }
            if (this.scrollY > 2685) {

                $('.skillTxt').addClass("animationR")

            } else {

                $('.skillTxt').removeClass("animationR")
            }
            if (this.scrollY > 2950) {
                $('.skillBar').addClass("animationL")


            } else {
                $('.skillBar').removeClass("animationL")

            }
            // project section
            if (this.scrollY > 3417) {
                $('.projectTitle').addClass("animationU")
            }
            else {
                $('.projectTitle').removeClass("animationU")

            }
            if (this.scrollY > 3650) {
                $('.owl-carousel').addClass("animationU")


            } else {
                $('.owl-carousel').removeClass("animationU")
            }
            // contact section
            if (this.scrollY > 4100) {
                $('.contactTitle').addClass("animationU")

            } else {
                $('.contactTitle').removeClass("animationU")
            }
            if (this.scrollY > 4336) {
                $('.contactL').addClass("animationR")
            } else {
                $('.contactL').removeClass("animationR")
            }
            if (this.scrollY > 4640) {
                $('.contactR').addClass("animationL")

            } else {
                $('.contactR').removeClass("animationL")
            }
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // by default animation of screen 
    if (scrollY == 0) {
        $(".home-content").addClass("animationR")
        $("#profile1").addClass("animationL")

    } else {
        $(".home-content").removeClass("animationR")
        $("#profile1").removeClass("animationL")
    }

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Student", "Programmer", /*"Freelancer"*/],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Student", "Programmer", /*"Freelancer"*/],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            20: {
                items: 2,
                nav: false
            },
            40: {
                items: 3,
                nav: false
            }

        }
    });
});

