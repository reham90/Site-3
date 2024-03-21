$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
      $("#menu-id").click(function(e) {
          e.preventDefault();
          $('.menu-bars .bar').toggleClass('hide-icon');
          $('.menu-bars .times').toggleClass('hide-icon');
          $(".navgition").toggleClass("reset-left");
          $("body").toggleClass("overflow");

      });
      $(".nav-head .close-btn").click(function() {
          $(".navgition").removeClass("reset-left");
          $(".menu-bars .bars").toggleClass("open-bars");
          $(".menu-bars .bars").toggleClass("close-bars");
          $("body").removeClass("overflow");
      });




      //slide down menu
      $(".menu-item-has-children a").click(function(e) {
          e.preventDefault();
          $(this).siblings(".sub-menu ").slideToggle(400);
        //   $(".menu-item-has-children a").not(this).siblings(".sub-menu ").slideUp(400);
          if ($(window).width() <= 991) {
              $(this).toggleClass("active");
              $(".menu-item-has-children a").not(this).removeClass("active");
          }
      });
    
  };

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 112) {
          $stickyNav.addClass("fixed-nav", 500);
      } else {
          $stickyNav.removeClass("fixed-nav", 500);
      }
      if (scroll == 0) {
          $stickyNav.removeClass("fixed-nav", 500);
      }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
  });

    /// ////// ** main-slider** /////////
    const specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });


    ////////////** counter  *///////////////////////////////
var ax = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    // Md.Asaduzzaman Muhid
    if (ax == 0 && $(window).scrollTop() > oTop) {
        $('.counter-number').each(function() {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        ax = 1; // Md.Asaduzzaman Muhid
    }
});

  ///////// **services-swiper-section** /////////
  var screen = new Swiper(".services .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
          el: ".services .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".services .swiper-btn-next",
          prevEl: ".services .swiper-btn-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          767: {
              slidesPerView: 3,
              spaceBetween: 15,
          },

          992: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1199: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
      },
  });

  ///////// **projects-swiper-section** /////////
  var screen2 = new Swiper(".projects .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".projects .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".projects .swiper-btn-next",
        prevEl: ".projects .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

 ///////// **clients-swiper-section** /////////
 var screen2 = new Swiper(".clients .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".clients .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".clients .swiper-btn-next",
        prevEl: ".clients .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 15,
        },

        992: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});


///////// **news-swiper-section** /////////
var screen = new Swiper(".news .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".news .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".news .swiper-btn-next",
        prevEl: ".news .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



///////// **certificates-swiper-section** /////////
var screen = new Swiper(".certificates .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".certificates .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".certificates .swiper-btn-next",
        prevEl: ".certificates .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
      $('.nav-foot-header').addClass('footer-accordion');
      $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function() {
      const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
      $('.footer-accordion').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($(this).siblings().css('max-height') == '0px') {
          $(this).siblings().css('max-height', x);
          $(this).siblings('.nav-foot').css('padding-top', '15px');
      } else {
          $(this).siblings().css('max-height', '0');
          $(this).siblings('.nav-foot').css('padding-top', '0');
      }

      $('.footer-accordion').not(this).siblings().css('max-height', '0');
      $('.footer-accordion')
          .not(this)
          .siblings('.nav-foot')
          .css('padding-top', '0');
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1500
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  })



});