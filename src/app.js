let scrollpos = window.scrollY;
let header = document.getElementById("header");
let navcontent = document.getElementById("nav-content");
let navaction = document.getElementById("navAction");
let brandname = document.getElementById("brandname");
let toToggle = document.querySelectorAll(".toggleColour");
let navlinks = document.querySelectorAll(".navlink");
let bars = document.getElementById("bars");

if (document.body.classList.contains('main-page')) {


    document.addEventListener("scroll", function () {

        scrollpos = window.scrollY;
        let windowWidth = window.innerWidth;


        if (scrollpos > 10) {
            header.classList.add("bg-white");
            navaction.classList.remove("bg-white");
            navaction.classList.remove("text-gray-800");
            navaction.classList.add("text-white");

            for (var i = 0; i < toToggle.length; i++) {
                toToggle[i].classList.add("text-gray-800");
                toToggle[i].classList.remove("text-white");
            }
            header.classList.add("shadow");
            document.getElementById("logo-white").classList.add("hidden");
            document.getElementById("logo-alt").classList.remove("hidden");

            navcontent.classList.remove("bg-white");
            navcontent.classList.add("bg-white");
            bars.classList.remove("text-white");
            bars.classList.add("text-black");
            if (windowWidth > 1024) {
                navlinks.forEach(function (link) {
                    link.style.color = "#000";
                });
            }

        } else {

            header.classList.remove("bg-white");
            navaction.classList.add("bg-white");
            navaction.classList.remove("text-white");
            navaction.classList.add("text-gray-800");
            bars.classList.remove("text-black");
            bars.classList.add("text-white");
            //Use to switch toggleColour colours
            for (var i = 0; i < toToggle.length; i++) {
                toToggle[i].classList.remove("text-white");
                toToggle[i].classList.add("text-gray-800");
            }

            document.getElementById("logo-white").classList.remove("hidden");
            document.getElementById("logo-alt").classList.add("hidden");
            header.classList.remove("shadow");
            navcontent.classList.remove("bg-white");
            navcontent.classList.add("bg-white");
            if (windowWidth <= 1024) {
                navlinks.forEach(function (link) {
                    link.style.color = "#000";
                });
                navaction.classList.remove("bg-white")
                navaction.classList.remove("text-gray-800")
                navaction.classList.add("text-white")

            }
            if (windowWidth > 1024) {
                navlinks.forEach(function (link) {
                    link.style.color = "#fff";
                });
            }
        }

    });
}



var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
    var target = (e && e.target) || (event && event.srcElement);


    if (!checkParent(target, navMenuDiv)) {

        if (checkParent(target, navMenu)) {

            if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden");
            } else {
                navMenuDiv.classList.add("hidden");
            }
        } else {

            navMenuDiv.classList.add("hidden");
        }
    }
}

const slideshow = () => ({
    current: 0,
    images: [
        './assets/hero-carousel/hero-carousel-1.jpg',
        './assets/hero-carousel/hero-carousel-1.jpg',
        './assets/hero-carousel/hero-carousel-1.jpg',
    ]
});

function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) {
            return true;
        }
        t = t.parentNode;
    }
    return false;
}

AOS.init();


function atualizarAnimacao() {
    var elementosAnimadosR = document.querySelectorAll('.animatedright');
    var elementosAnimadosL = document.querySelectorAll('.animatedleft');

    elementosAnimadosL.forEach(function (elemento) {
        if (window.innerWidth < 1024) {

            elemento.setAttribute('data-aos', 'fade-left');
        } else {

            elemento.setAttribute('data-aos', 'fade-up');
        }
    });
    elementosAnimadosR.forEach(function (elemento) {
        if (window.innerWidth < 1024) {

            elemento.setAttribute('data-aos', 'fade-right');
        } else {

            elemento.setAttribute('data-aos', 'fade-up');
        }
    });
}

document.addEventListener('DOMContentLoaded', atualizarAnimacao);
window.addEventListener('resize', atualizarAnimacao);




$(document).ready(function () {

    const $slickWrapper = $('.blog__list');
    $($slickWrapper).slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,


    });

});

$(document).ready(function () {

    const $slickWrapper = $('.testimonials__list');
    $($slickWrapper).slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,


    });

});




function toggleFAQ(button) {
    const content = button.nextElementSibling;
    button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
    content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
}

//Email validation script
document.getElementById("contact-form").addEventListener("submit", function (event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    if (nameInput.value === "" || emailInput.value === "" || subjectInput.value === "" || messageInput.value === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        event.preventDefault();
    } else {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var phonePattern = /^\d+$/;

        if (!emailPattern.test(emailInput.value)) {
            alert("Por favor, insira um email válido.");
            event.preventDefault();
        } else if (!phonePattern.test(phoneInput.value)) {
            alert("Por favor, insira um número de telefone válido.");
            event.preventDefault();
        } else {
            sendEmail();
            event.preventDefault();
        }
    }
});

//SendEmail script
function sendEmail() {
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "";
    const templateID = 'template_utrwj68';

    emailjs
        .send(serviceID, templateID, templateParams)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Obrigado por enviar sua mensagem!")
        })

        .catch((err) => console.log(err));
}

(function () {
    emailjs.init("");
})();

function toggleText(textId) {
    var allTabs = document.querySelectorAll('.tab');

    allTabs.forEach(function (tab) {
        if (tab.id === textId) {
            tab.classList.remove('hidden');
        } else {
            tab.classList.add('hidden');
        }
    });
}
//Glightbox script
const glightbox = GLightbox({
    selector: '.glightbox'
});

// external js: isotope.pkgd.js


// init Isotope


var $gallery = $('.gallery').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        },
    },
    masonry: {
        columnWidth: 10,
        rowHeight: 100,
    },

});

/*
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

// bind filter button click
$('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $gallery.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $gallery.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
*/
let portfolionIsotope = document.querySelector('.portfolio-isotope');

if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
        let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
            itemSelector: '.portfolio-item',
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort
        });

        let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
        menuFilters.forEach(function (el) {
            el.addEventListener('click', function () {
                document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
                this.classList.add('filter-active');
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                if (typeof aos_init === 'function') {
                    aos_init();
                }
            }, false);
        });

    });

}


