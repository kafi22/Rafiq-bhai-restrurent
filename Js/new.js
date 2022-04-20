// ACTIVE NAVBAR 

let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add('scrollOn');
    }else{
        nav.classList.remove('scrollOn')
    }
}



// NAV HIDE 

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function (e) {
    e.addEventListener('click', function () {
        navCollapse.classList.remove('show')
    })
})


// COUNTER 

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start, 
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor (duration / range)),
        timer = setInterval (() => {

            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer)
            }
        }, step);

    }

    counter("count1", 0, 56, 4000);
    counter("count2", 0, 56, 4000);
    counter("count3", 0, 116, 3000);
    counter("count4", 0, 106, 3000);
})


