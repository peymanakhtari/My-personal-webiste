
AOS.init({ once: true });

$(window).resize(function () {
    $('#tvSpan').height(($('#tvSpan').width() * 2) / 3)
    $('#tvSpanDesktop').height(($('#tvSpanDesktop').width() * 2) / 3)
});

$(document).ready(function () {
    $('#tvSpan').height(($('#tvSpan').width() * 2) / 3);
    $('#tvSpanDesktop').height(($('#tvSpanDesktop').width() * 2) / 3);
})
desktopNav.classList.add('moveNav');

