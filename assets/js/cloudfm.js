$(window).scroll(()=>{

    let wScroll = $(this).scrollTop();
    // let section2Card = $('.firstTopic p').position();
    let section3Text = $('.section-3-text').position();
    let topSection = $('.section-2 .videoThumb');

    if(wScroll > section3Text.top + 100 ){
        $('.section-4-title').addClass('animated fadeInLeft');
        $('.section-4-txt').addClass('animated fadeInRight');

        $('.section-4-title').removeClass('d-none');
        $('.section-4-txt').removeClass('d-none');
    }     

    $('.section-2 .card').css({
        'transform' : 'translate(0px, '+ wScroll/20 +'%)'
    }); 

});//eof window scroll

// Select dom items 
const menuBtn =  
document.querySelector(".menu-btn"); 

const menu =  
document.querySelector(".menu"); 

const menuNav =  
document.querySelector(".menu-nav"); 

const menuBranding =  
document.querySelector(".menu-branding"); 

const navItems =  
document.querySelectorAll(".nav-item"); 

// Set the initial state of the menu 
let showMenu = false; 

menuBtn.addEventListener("click", toggleMenu); 

function toggleMenu() { 
    if (!showMenu) { 
        menuBtn.classList.add("close"); 
        menu.classList.add("show"); 
        menuNav.classList.add("show"); 
        //menuBranding.classList.add("show"); 
        navItems.forEach((item) => 
            item.classList.add("show")); 

        // Reset the menu state 
        showMenu = true; 
    } else { 
        menuBtn.classList.remove("close"); 
        menu.classList.remove("show"); 
        menuNav.classList.remove("show"); 
        //menuBranding.classList.remove("show"); 
        navItems.forEach((item) => 
            item.classList.remove("show")); 

        // Reset the menu state 
        showMenu = false; 
    } 
}

/*customer logos*/
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

});



jQuery(function ($) {
    var slider = $('.mis-stage').miSlider({
        //  The height of the stage in px. Options: false or positive integer. false = height is calculated using maximum slide heights. Default: false
        //stageHeight: 380,
        //  Number of slides visible at one time. Options: false or positive integer. false = Fit as many as possible.  Default: 1
        slidesOnStage: false,
        //  The location of the current slide on the stage. Options: 'left', 'right', 'center'. Defualt: 'left'
        slidePosition: 'center',
        //  The slide to start on. Options: 'beg', 'mid', 'end' or slide number starting at 1 - '1','2','3', etc. Defualt: 'beg'
        slideStart: 'mid',
        //  The relative percentage scaling factor of the current slide - other slides are scaled down. Options: positive number 100 or higher. 100 = No scaling. Defualt: 100
        slideScaling: 150,
        //  The vertical offset of the slide center as a percentage of slide height. Options:  positive or negative number. Neg value = up. Pos value = down. 0 = No offset. Default: 0
        offsetV: -5,
        //  Center slide contents vertically - Boolean. Default: false
        centerV: true,
        //  Opacity of the prev and next button navigation when not transitioning. Options: Number between 0 and 1. 0 (transparent) - 1 (opaque). Default: .5
        navButtonsOpacity: 1
    });
});