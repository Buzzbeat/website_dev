$(".menu").click(function(){
  $(".nav-mobile").toggle();
});

var clicked = "false";
  
  $('.menu').click(function(e) {
    e.preventDefault();
    var overflowState = 'auto'

    if (clicked == "false") {
    overflowState = 'hidden';
    clicked = "true";
    } else {
    overflowState = 'auto';
    clicked = "false";
    }
    $('html, body').css('overflow', overflowState);
    $('.nav-bar').addClass('light-nav').removeClass('dark-nav');
});

$(window).scroll(function(){
  var sticky = $('.nav-bar'),
      scroll = $(window).scrollTop();

  if (scroll >= 999) sticky.addClass('sticky-bar light-nav').removeClass('transparent-nav');
  else sticky.removeClass('sticky-bar light-nav');
});


$(window).scroll(function(){
  var sticky = $('.light-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 999) sticky.addClass('sticky-bar');
  else sticky.removeClass('sticky-bar');
});


/*
var slider = {
  
    // Not sure if keeping element collections like this
    // together is useful or not.
    el: {
      slider: $("#slider"),
      allSlides: $(".slide"),
      sliderNav: $(".slider-nav"),
      allNavButtons: $(".slider-nav > a")
    },
    
    timing: 800,
    slideWidth: 900, // could measure this
   
    // In this simple example, might just move the
    // binding here to the init function
    init: function() {
      this.bindUIEvents();
    },
    
    bindUIEvents: function() {
      // You can either manually scroll...
      this.el.slider.on("scroll", function(event) {
        slider.moveSlidePosition(event);
      });
      // ... or click a thing
      this.el.sliderNav.on("click", "a", function(event) {
        slider.handleNavClick(event, this);
      });
      // What would be cool is if it had touch
      // events where you could swipe but it
      // also kinda snapped into place.
    },
    
    moveSlidePosition: function(event) {
      // Magic Numbers =(
      this.el.allSlides.css({
        "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
      });  
    },
    
    handleNavClick: function(event, el) {
      event.preventDefault();
      var position = $(el).attr("href").split("-").pop();
      
      this.el.slider.animate({
        scrollLeft: position * this.slideWidth
      }, this.timing);
      
      this.changeActiveNav(el);
    },
    
    changeActiveNav: function(el) {
      this.el.allNavButtons.removeClass("active");
      $(el).addClass("active");
    }
    
  };
  
  slider.init();
*/

  /* Owl Carousel.js */

  $('.owl-carousel').owlCarousel({
    rtl:false,
    items:4,
    loop:false,
    margin:70,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

function myFunction(x) {
  x.classList.toggle("change");
}

/* accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* animações scrollama */

const scroller = scrollama();

scroller
  .setup({
    step: '.animista',
    offset: 0.75
  })
  .onStepEnter(function(response) {
    response.element.classList.add('appear');
    console.log();
  });

window.addEventListener('resize', scroller.resize);

/* */

function scrollFn() {

  var targetOffset = $(".anchor-point").offset().top - 900;
  var w = $(window).scrollTop();

  if (w > targetOffset) {
    $("body").addClass("dark-bg");
    $(".nav-bar").removeClass("light-nav");
    $(".nav-bar").addClass("dark-nav");
  } else {
    $("body").removeClass("dark-bg");
    $(".nav-bar").removeClass("dark-nav");
    $(".nav-bar").addClass("light-nav");
  }
};
$(window).on('scroll', scrollFn);



function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

