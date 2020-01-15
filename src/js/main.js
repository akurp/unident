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
    // modals
    var button = $('#button');
    var modal = $('#modal');
    var close  = $('#close');
    button.on('click', function()
    {
        modal.addClass('modal_active');
    })
    close.on('click', function()
    {
        modal.removeClass('modal_active')
    });
    


    $('form').each(function(){
        $(this).validate({
            rules:
            {
                formUser1:
                {
                    required: true
                },
                formPhone1:
                {
                    required: true
                },
                formUser2:
                {
                    required: true
                },
                formPhone2:
                {
                    required: true
                },
                formUser3:
                {
                    required: true
                },
                formPhone3:
                {
                    required: true
                },
                formUser4:
                {
                    required: true
                },
                formPhone4:
                {
                    required: true
                },
                formUserM:
                {
                    required: true
                },
                formPhoneM:
                {
                    required: true
                }
            },
            errorClass: "invalid",
            errorElement: "label",
            errorPlacement: function(invalid, label){}
        })
    })
    // phone mask
    $('#phone1').mask("+7 (999) 999-99-99");
    $('#phone2').mask("+7 (999) 999-99-99");
    $('#phone3').mask("+7 (999) 999-99-99");
    $('#phone4').mask("+7 (999) 999-99-99");
    $('#phone5').mask("+7 (999) 999-99-99");
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
