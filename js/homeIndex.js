
var mobileIcon = document.getElementById('menu-button');
var threshold = 200;
$(window).scroll(function () {
    if (window.pageYOffset > threshold) {
        desktopNav.style.opacity = '1';
        mobileIcon.style.opacity = '1';

    } else {
        desktopNav.style.opacity = '0';
        mobileIcon.style.opacity = '0';
        if (mobileNav.classList.contains('show')) {
            mobileNav.classList.remove('show');
            this.document.getElementById('check').checked = false;
        }
    }

})

$(document).ready(function () {



    $('#btnSendMessage').click(function () {
        var email = $('#txtEmail').val();
        var message = $('#txtMessage').val();
        if (email === '' || message === '') {
            if (email === '') {
                $('#txtEmail').addClass('shake');
                setTimeout(function () {
                    $('#txtEmail').removeClass('shake');
                }, 1000);
            }
            if (message === '') {
                $('#txtMessage').addClass('shake');
                setTimeout(function () {
                    $('#txtMessage').removeClass('shake');
                }, 1000);
            }
        }
        else {

            $.ajax({
                url: '/home/email',
                data: { email: email, message: message }
            })

            $('#Alert1').show();
            $('#txtEmail').val('');
            $('#txtMessage').val('');
            $('.emailBg').css('width', '0');
            $('.emailBg').css('color', 'lightgray');
            $('.messageBg').css('width', '0');
            $('.messageBg').css('color', 'lightgray');

        }
    });

    if (!iOS()) {
        $('.skillBox').attr('data-aos', 'flip-left');
        $('.skillBox').attr('data-aos-duration', '800');
    }

})

$('#txtEmail').on('focusin', function () {
    $('.emailBg').css('width', '90%')
}).on('focusout', function () {
    if ($(this).val() === '') {
        $('.emailBg').css('width', '0')
        $('.emailBg').css('color', 'lightgray')
    }
})

$('#txtMessage').on('focusin', function () {
    $('.messageBg').css('width', '90%')
}).on('focusout', function () {
    if ($(this).val() === '') {
        $('.messageBg').css('width', '0')
        $('.messageBg').css('color', 'lightgray')
    }
})

function closeAlert1(event) {
    $('#Alert1').hide();
}


var typed1 = new Typed("#typed1", {
    strings: ["Freelancer", "Full-stack"],
    typeSpeed: 80,
    backSpeed: 20,
    cursorChar: "",
    smartBackspace: false,
    loop: true,
});

var granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "top-bottom",
    isPausedWhenNotInView: false,
    states: {
        "default-state": {
            gradients: [
                ["rgb(95, 95, 95)", "rgba(0, 0, 0, 0)"],
                ["#fff", "rgba(0, 0, 0, 0)"],

            ],
            transitionSpeed: 5000,
        },
    },
});


inView.offset({
    top: -250,
    right: 0,
    bottom: 120,
    left: 0
});

inView(".portfoDiv").on("enter", el => {
    var anchor = $(".portfoDiv a");
    var span = $(".portfoDiv span");
    $(anchor).addClass("animate__zoomInUp");
    $(span).addClass("animate__zoomInUp");
}).on('exit', el => {
    var anchor = $(".portfoDiv a");
    var span = $(".portfoDiv span");
    $(anchor).removeClass("animate__zoomInUp");
    $(span).removeClass("animate__zoomInUp");
});


inView('.skillBox').on('enter', el => {
    var card = $(el).children('.skillCard')
    card.children('p').each(function () {
        $(this).children('span').addClass('showSkills')
    })

}).on('exit', el => {
    if ($(window).scrollTop() < 500 && $(el).attr('id') == 'firstSkillbox') {
        $('.skillBox').removeClass('flipSkills')
        $('.skillBox .skillCard p span').removeClass('showSkills')
    }
});



