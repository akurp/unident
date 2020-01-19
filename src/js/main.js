$(document).ready(function () {
    // 
    // $("#offer-form").on("submit", function (e) {
    //     e.preventDefault();
    //     var a = $(".formUser1").val(),
    //         t = $(".formPhone1").val();
    //     if ("" == a || "" == t) 
    //         return valid = !1,
    //         valid;
    // }),
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
    var button = $('.popup');
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
    var exit = $('#exit');
    var success = $('.success');
    exit.on("click", function()
    {
        success.removeClass('success_active');
    })
    
    


    $('form').each(function(){
        $(this).validate({
            rules:
            {
                formUser:
                {
                    required: true
                },
                formPhone:
                {
                    required: true
                }
            },
            errorClass: "invalid",
            errorElement: "label",
            errorPlacement: function(invalid, label){},
            submitHandler: function(form){
                // e.preventDefault();
                $.ajax({
                    url: "smart.php",
                    type: "POST",
                    data: $(form).serialize(),
                    success: function () {
                        $('.modal').removeClass('modal_active');
                        $('.success').addClass("success_active");
                        $('form').trigger('reset');
                    }
                })
            }
        })
    })
    // phone mask
    $('.phone').mask("+7 (999) 999-99-99");
    
    // map
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll',function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop)
        {
            // console.log("Вот тут-то ты и попался!");
            var scriptOn = document.createElement("script");
            scriptOn.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acab7146d52ebf12a4a9dcbdd01bd93ec9b39bd82f9cd38b8b67eec4ac879fa74&amp;width=370&amp;height=255&amp;lang=ru_RU&amp;scroll=true';
            document.getElementById("mapOne").appendChild(scriptOn);
            
            var scriptTw = document.createElement("script");
            scriptTw.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A207a269da18b33a204bb459c0b3e3cab7bdab69e031064eb1a2443a3ef75bd81&amp;width=370&amp;height=255&amp;lang=ru_RU&amp;scroll=true';
            document.getElementById("mapTwo").appendChild(scriptTw);

            var script = document.createElement("script");
            script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A78c5b3b75d1063cb060fa3d6835f1229a9a5e5a150ba360b45d3a6567026dca2&amp;width=370&amp;height=255&amp;lang=ru_RU&amp;scroll=true';
            document.getElementById("mapTr").appendChild(script);

            $(window).unbind('scroll');
        }
    });
    // var clients = $('.clients');
    // var clientsTop = clients.offset().top;
    // $(window).bind('scroll',function(){
    //     var windowTop = $(this).scrollTop;
    //     if (windowTop > clientsTop)
    //     {
    //         var audio = document.createElement("audio");
    //         audio.src = 'media/Dave_Rodgers–Deja_Vu.mp3';
    //         audio.className = 'review-block-description-audio__track';
    //         audio.id = 'myTrack';
    //         document.getElementById("audioOne").appendChild(audio);

    //         var audio1 = document.createElement("audio");
    //         audio.src = 'media/Dave_Rodgers–Deja_Vu.mp3';
    //         audio.className = 'review-block-description-audio__track';
    //         audio.id = 'myTrack';
    //         document.getElementById("audioTwo").appendChild(audio1);
    //     }
    // })
    // player
    $('.myTrack').audioPlayer();
});
// creating own audioplayer
// var myTrack = document.classList('myTrack');
// var playButton = document.classList('playButton');

// var muteButton = document.classList('muteButton');

// var duration = document.classList('fullDuration');
// var currentTime = document.classList('currentTime');

// var width = document
//     .classList('defaultBar')
//     .offsetWidth;

// var minutes = parseInt(myTrack.duration / 60);
// var seconds = parseInt(myTrack.duration % 60);

// var barSize = 520;

// var bar = document.classList('defaultBar');
// var progressBar = document.classList('progressBar');

// duration.innerHTML = minutes + ':' + seconds;

// playButton.addEventListener('click', playOrPause, false);
// muteButton.addEventListener('click', muteOrUnmute, false);

// function playOrPause() {
//     if (!myTrack.paused && !myTrack.ended) {
//         myTrack.pause();
//         window.clearInterval(updateTime);
//         // var elements = document.getElementsByClassName("fa fa-pause"); if
//         // (elements[0]) {   elements[0].className = "fa fa-play";   replaceClass(); }
//         // document.getElementById('playIcon').classList.toggle("fa-pause");
//         document
//             .classList('playIcon')
//             .classList
//             .remove('fa-pause');
//         document
//             .classList('playIcon')
//             .classList
//             .add('fa-play');
//     } else {
//         myTrack.play();
//         updateTime = setInterval(update, 500);
//         // var elements = document.getElementsByClassName("fa fa-play"); if
//         // (elements[0]) {   elements[0].className = "fa fa-pause";   replaceClass(); };
//         // document.getElementById('playIcon').classList.toggle("fa-play");
//         document
//             .classList('playIcon')
//             .classList
//             .remove('fa-play');
//         document
//             .classList('playIcon')
//             .classList
//             .add('fa-pause');
//     }
// };

// function muteOrUnmute() {
//     if (myTrack.muted == true) {
//         myTrack.muted = false;
//         // var elements = document.getElementsByClassName("fa fa-volume-off"); if
//         // (elements[0]) {   elements[0].className = "fa fa-volume-up"; replaceClass();
//         // }

//         document
//             .classList('volumeIcon')
//             .classList
//             .remove('fa-volume-off');
//         document
//             .classList('volumeIcon')
//             .classList
//             .add('fa-volume-up');
//     } else {
//         myTrack.muted = true;
//         // var elements = document.getElementsByClassName("fa fa-volume-up"); if
//         // (elements[0]) {   elements[0].className = "fa fa-volume-off"; replaceClass();
//         // }
//         document
//             .classList('volumeIcon')
//             .classList
//             .remove('fa-volume-up');
//         document
//             .classList('volumeIcon')
//             .classList
//             .add('fa-volume-off');
//     }
// }

// function update() {
//     if (!myTrack.ended) {
//         var playedMinutes = parseInt(myTrack.currentTime / 60);
//         var playedSeconds = parseInt(myTrack.currentTime % 60);
//         currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
//         var size = parseInt(myTrack.currentTime * barSize / myTrack.duration);
//         progressBar.style.width = size + "px";
//     } else {
//         currentTime.innerHTML = "0.00";
//         progressBar.style.width = "0px";
//         window.clearInterval(updateTime);
//         // var elements = document.getElementsByClassName("fa fa-pause"); if
//         // (elements[0]) {   elements[0].className = "fa fa-play";   replaceClass(); }
//         document
//             .getElementById('playIcon')
//             .classList
//             .remove('fa-pause');
//         document
//             .getElementById('playIcon')
//             .classList
//             .add('fa-play');

//     }
// }
// // messages
