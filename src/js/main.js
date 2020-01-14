$(document).ready(function () {
    // sliders sets
    $('.slider').slick(
        {slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false}
    );
    $('.reason-slider').slick(
        {slidesToShow: 1, slidesToScroll: 1, arrows: true, prevArrow: $('.reason-arrow_prev'), nextArrow: $('.reason-arrow_next')}
    );
    $('.smile-slider').slick(
        {slidesToShow: 1, slidesToScroll: 1, arrows: true, prevArrow: $('.smile-arrow_prev'), nextArrow: $('.smile-arrow_next')}
    );
    $('.clients-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.clients-arrow_next'),
        prevArrow: $('.clients-arrow_prev'),
        dots: false,
        asNavFor: '.clients-slider-nav'
    });
    $('.clients-slider-nav').slick(
        {slidesToShow: 5, asNavFor: '.clients-slider', appendDots: $('.clients-slider-nav__item'), focusOnSelect: true}
    )
    $('.dentist-slider').slick({slidesToShow: 6})
    $('.reviews-block-description-audio__start').on('click', function () {
        $('fa-play').toggleClass('fa-pause');
    });
    $('.specs-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.specs-slide__arrow_prev'),
        nextArrow: $('.specs-slide__arrow_next'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.reviews-slider').slick(
        {slidesToShow: 1, slidesToScroll: 1, arrows: true, prevArrow: $('.reviews-arrow_prev'), nextArrow: $('.reviews-arrow_next')}
    );

    var e = $(".reviews")
        .offset()
        .top;
    $(window).bind("scroll", function () {
        $(this).scrollTop() > e && (
            console.log("вот тут-то ты и попался, дружок-пирожок!"),
            // $('#map1').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acab7146d52ebf12a4a9dcbdd01bd93ec9b39bd82f9cd38b8b67eec4ac879fa74&amp;width=370&amp;height=255&amp;lang=ru_RU&amp;scroll=true"></script>'),
            $(window).unbind("scroll")
        )
    })
});
// creating own audioplayer
var myTrack = document.getElementById('myTrack');
var playButton = document.getElementById('playButton');

var muteButton = document.getElementById('muteButton');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

var width = document
    .getElementById('defaultBar')
    .offsetWidth;

var minutes = parseInt(myTrack.duration / 60);
var seconds = parseInt(myTrack.duration % 60);

var barSize = 520;

var bar = document.getElementById('defaultBar');
var progressBar = document.getElementById('progressBar');

duration.innerHTML = minutes + ':' + seconds;

playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);

function playOrPause() {
    if (!myTrack.paused && !myTrack.ended) {
        myTrack.pause();
        window.clearInterval(updateTime);
        // var elements = document.getElementsByClassName("fa fa-pause"); if
        // (elements[0]) {   elements[0].className = "fa fa-play";   replaceClass(); }
        // document.getElementById('playIcon').classList.toggle("fa-pause");
        document
            .getElementById('playIcon')
            .classList
            .remove('fa-pause');
        document
            .getElementById('playIcon')
            .classList
            .add('fa-play');
    } else {
        myTrack.play();
        updateTime = setInterval(update, 500);
        // var elements = document.getElementsByClassName("fa fa-play"); if
        // (elements[0]) {   elements[0].className = "fa fa-pause";   replaceClass(); };
        // document.getElementById('playIcon').classList.toggle("fa-play");
        document
            .getElementById('playIcon')
            .classList
            .remove('fa-play');
        document
            .getElementById('playIcon')
            .classList
            .add('fa-pause');
    }
};

function muteOrUnmute() {
    if (myTrack.muted == true) {
        myTrack.muted = false;
        // var elements = document.getElementsByClassName("fa fa-volume-off"); if
        // (elements[0]) {   elements[0].className = "fa fa-volume-up"; replaceClass();
        // }

        document
            .getElementById('volumeIcon')
            .classList
            .remove('fa-volume-off');
        document
            .getElementById('volumeIcon')
            .classList
            .add('fa-volume-up');
    } else {
        myTrack.muted = true;
        // var elements = document.getElementsByClassName("fa fa-volume-up"); if
        // (elements[0]) {   elements[0].className = "fa fa-volume-off"; replaceClass();
        // }
        document
            .getElementById('volumeIcon')
            .classList
            .remove('fa-volume-up');
        document
            .getElementById('volumeIcon')
            .classList
            .add('fa-volume-off');
    }
}

function update() {
    if (!myTrack.ended) {
        var playedMinutes = parseInt(myTrack.currentTime / 60);
        var playedSeconds = parseInt(myTrack.currentTime % 60);
        currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
        var size = parseInt(myTrack.currentTime * barSize / myTrack.duration);
        progressBar.style.width = size + "px";
    } else {
        currentTime.innerHTML = "0.00";
        progressBar.style.width = "0px";
        window.clearInterval(updateTime);
        // var elements = document.getElementsByClassName("fa fa-pause"); if
        // (elements[0]) {   elements[0].className = "fa fa-play";   replaceClass(); }
        document
            .getElementById('playIcon')
            .classList
            .remove('fa-pause');
        document
            .getElementById('playIcon')
            .classList
            .add('fa-play');

    }
}
