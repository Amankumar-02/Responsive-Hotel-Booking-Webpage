// Navbar Scrolled
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
}




let slide_1 = document.getElementById("slide1")
let tab_1 = document.getElementById("table1")
let icon_1 = document.getElementById("icon-1")
let slide_2 = document.getElementById("slide2")
let tab_2 = document.getElementById("table2")
let icon_2 = document.getElementById("icon-2")
let slide_3 = document.getElementById("slide3")
let tab_3 = document.getElementById("table3")
let icon_3 = document.getElementById("icon-3")
let slide_4 = document.getElementById("slide4")
let tab_4 = document.getElementById("table4")
let icon_4 = document.getElementById("icon-4")


tab_1.addEventListener("click", myFunction1);
tab_2.addEventListener("click", myFunction2);
tab_3.addEventListener("click", myFunction3);
tab_4.addEventListener("click", myFunction4);

function myFunction1() {
    slide_1.classList.add("opacity-100");
    slide_2.classList.remove("opacity-100");
    slide_3.classList.remove("opacity-100");
    slide_4.classList.remove("opacity-100");
    slide_2.classList.add("opacity-0");
    slide_3.classList.add("opacity-0");
    slide_4.classList.add("opacity-0");
    icon_1.classList.add("active");
    icon_2.classList.remove("active");
    icon_3.classList.remove("active");
    icon_4.classList.remove("active");
}
function myFunction2() {
    slide_2.classList.add("opacity-100");
    slide_1.classList.remove("opacity-100");
    slide_3.classList.remove("opacity-100");
    slide_4.classList.remove("opacity-100");
    slide_1.classList.add("opacity-0");
    slide_3.classList.add("opacity-0");
    slide_4.classList.add("opacity-0");
    icon_1.classList.remove("active");
    icon_2.classList.add("active");
    icon_3.classList.remove("active");
    icon_4.classList.remove("active");
}
function myFunction3() {
    slide_3.classList.add("opacity-100");
    slide_1.classList.remove("opacity-100");
    slide_2.classList.remove("opacity-100");
    slide_4.classList.remove("opacity-100");  
    slide_1.classList.add("opacity-0");
    slide_2.classList.add("opacity-0");
    slide_4.classList.add("opacity-0");
    icon_1.classList.remove("active");
    icon_2.classList.remove("active");
    icon_3.classList.add("active");
    icon_4.classList.remove("active");
}
function myFunction4() {
    slide_4.classList.add("opacity-100");
    slide_1.classList.remove("opacity-100");
    slide_2.classList.remove("opacity-100");
    slide_3.classList.remove("opacity-100");
    slide_1.classList.add("opacity-0");
    slide_2.classList.add("opacity-0");
    slide_3.classList.add("opacity-0");
    icon_1.classList.remove("active");
    icon_2.classList.remove("active");
    icon_3.classList.remove("active");
    icon_4.classList.add("active");
}

//number counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 0, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
   });





//    OwlCarousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            // 600: {
            //     items: 3
            // },
            600: {
                items: 5
            }
        }
    });
});