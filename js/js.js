// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const additionalOffset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const rect = targetElement.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset - additionalOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}



function doNothing() {
    event.stopPropagation();

}



function iOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}


var desktopNav = document.getElementById('desktopNav');
var checkbox = document.getElementById('check');
var mobileNav = document.getElementById('mobileNav');

var prevScrollPos = window.pageYOffset;

AOS.init();

window.onload = (event) => {
    delay(500);
    $('.portfoDiv').css('visibility', 'visible');

    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(function () {
                const additionalOffset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
                const rect = targetElement.getBoundingClientRect();
                const offsetTop = rect.top + window.pageYOffset - additionalOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 0); // Using setTimeout to ensure the element's position is calculated after load
        }
    }
};


$(window).scroll(function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        desktopNav.classList.add('moveNav');
    } else {
        desktopNav.classList.remove('moveNav');
    }

    prevScrollPos = currentScrollPos;


})






checkbox.addEventListener('change', function () {
    if (this.checked) {
        mobileNav.classList.add('show')
    } else {
        mobileNav.classList.remove('show')
    }
});


function redirectToWebsite(url) {
    window.open(url, '_blank');
}

