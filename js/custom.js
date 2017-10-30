(function($){

    'use strict';

    var winW = $(window).width();
    var winH  =  $(window).height();

    /*  
        Credits: http://shariarbd.com/demo/responsive-isotope-masonry-layout/
    */

    $(window).on("load resize",function(e){
        

    });

    /*
      Blur Image
      Copyright (c) 2016 by Andreas Storm (http://codepen.io/andreasstorm/pen/pyjEh)
    */
     ;(function(){
         $(window).scroll(function() {
            var oVal;
            oVal = $(window).scrollTop() / 240;
            return $(".blur").css("opacity", oVal);
          });
     })();

    // Testimonial 

    $(window).load(function () {
    });

    //TAB
    $('.nav-tab-item-proc').on('click', function () {
        var $t = $(this),
            navTabItem = $t.parent().parent().find('.nav-tab-item-proc'),
            index = $t.parent().parent().find('.nav-tab-item-proc').index(this),
            numElem =  $t.closest('.nav-tab').next('.tab-line-container').find('.tab-num');
        numElem.parent().find('.active').removeClass('active');
        numElem.eq(index).addClass('active').prevAll().addClass('active');


    });

    /* 
      Parallax.js 
      © 2015 PixelCog Inc. released under MIT license            
    */

    function initParallax() {
        $('.parallax-bg').parallax({
          speed: 0.5,
          zIndex: -100
        });     
    }

    /*
        Bootstrap Full screen slider
        Copyright Sitepoint, 2015
    */

    function initFullScreenSlider () {
        var $item = $('.carousel .item'); 
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight); 
        $item.addClass('full-screen');

        $('.carousel img').each(function() {
          var $src = $(this).attr('src');
          var $color = $(this).attr('data-color');
          $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
          });
          $(this).remove();
        });

        $(window).on('resize', function (){
          $wHeight = $(window).height();
          $item.height($wHeight);
        });

        $('.carousel').carousel({
          interval: 6000,
          pause: "false"
        });
    }

    function initSkillBar() {
        var goScrolling = function(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };
        $('.progress .bar').data('width', $(this).width()).css({
            width : 0
        });
        $(window).scroll(function() {
            $('.progress .bar').each(function() {
                if (goScrolling($(this))) {
                    $(this).css({
                        width : $(this).attr('data-value') + '%'
                    });
                }
            });
        });
    }

    function initSubscribeForm(){
        $('#subscriber-form').ajaxChimp({
        url: 'http://rashedamins.us12.list-manage.com/subscribe/post?u=e9210890a3bdbbd5d088c6796&id=7491b0eac2',
        callback: function (res) {
        console.log('Foober');    
          var template = '<div class="modal fade" id="modal" tabindex="-1" role="dialog">';
          template += '<div class="centrize">';
          template += '<div class="v-center">';
          template += '<div class="modal-dialog">';
          template += '<div class="modal-content">';
          template += '<div class="modal-header">';
          template += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="ti-close"></i></span></button>';
          if (res.result === 'success') {
            template += '<h4 class="modal-title">Thank you!</h2>';
          } else{
            template += '<h4 class="modal-title">There was an error.</h2>';          }

          template += '</div>';
          template += '<div class="modal-body">';
          template += '<p>' + res.msg + '</p>';
          template += '</div>';
          template += '</div>';
          template += '</div>';
          template += '</div>';
          template += '</div>';
          template += '</div>';

          $(template).modal().on('hidden.bs.modal', function () {
            $(this).remove();      
          });
        }
      });
    };

    function initFitVids () {
         $(".video-container").fitVids();
    }

    function initScrollIcon() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    };

    function initTopScroll() {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    };

    function initContactForm (argument) {
        $("#contact").submit(function (e) {
            e.preventDefault();
            var name = $("#name").val();
            var email = $("#email").val();
            var subject = $("#subject").val();
            var message = $("#message").val();
            var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

            function isValidEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };

            if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
                $.ajax({
                    type: "POST",
                    url: "sendmail.php",
                    data: dataString,
                    success: function () {
                        $('.success').fadeIn(1000);
                        $('.error').fadeOut(500);
                    }
                });
            } else {
                $('.error').fadeIn(1000);
                $('.success').fadeOut(500);
            }
                return false;
        });
    }

    function initSliderTypist() {
         if(typeof Typist == 'function') {
            new Typist(document.querySelector('.typist-element'), {
                letterInterval: 60,
                textInterval: 3000
            });
        }
    }

    function initGoogleMaps() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                draggable: false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.7127, -74.0059), // New york

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.7127, -74.0059),
                map: map,
                title: 'Find us here!'
            });
        }

    $(window).load(function() {
        
        $(".preloader").delay(2000).fadeOut("slow");
        // Animated Letter
        if ($('.list__item').length > 0) {
            (function() {
            var decoLetter = new Letters(document.querySelector('.deco'), { 
                size: 1000,
                weight: 5,
                color: '#212028',
                //color: '#63646B',
                duration: 2,
                fade:0,
                easing: d3_ease.easeExpOut.ease
            });
            decoLetter.hideInstantly();
            setTimeout(function() {
                decoLetter.show();
            }, 200);
        })();
        }
        // Fourbox Slider
        // var boxFx = new BoxesFx( document.getElementById( 'boxgallery' ) );
    });    

    

    function isScrolledIntoView(elem)
    {
        try {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
            }
            catch (ex) {
                return false;
            }
    }

    $(document).ready(function() {

    });

    if (matchMedia('(max-width: 480px)').matches) {
        $('.main-navigation a').on('click', function () {
            $(".navbar-toggle").click();
        });
    }

    function mainNav60() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) { 
            $('.sticky-navigation').stop().animate({"top": '0'});
        }
        else { 
            $('.sticky-navigation').stop().animate({"top": '-60'});
        }
    }

    function mainNav120() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) {
            $('.sticky-navigation').stop().animate({"top": '0'});
        }
        else { 
            $('.sticky-navigation').stop().animate({"top": '-120'}); 
        }
    }

    if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
        $(document).ready(function () {
            mainNav60();
        });
        $(window).scroll(function () {
            mainNav60();
        });
    }

    if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
        $(document).ready(function () {
            mainNav120();
        });
        $(window).scroll(function () {
            mainNav120();
        });
    }

    $(document).ready( function() {
        /* 
            Owl Carousel 
            The MIT License (MIT) 2016
        */
        if($("#clients-1").length > 0){
            $("#clients-1").owlCarousel({
                autoPlay: 3000, 
                items : 5,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [979,3]
            });
        }
        if($("#work-carousel").length > 0){
            $("#work-carousel").owlCarousel({
                loop: true,
                autoPlay: 2000, 
                items : 4,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [979,3]
            });   
        }
        if($("#content-slider").length > 0){
            $("#content-slider").owlCarousel({
                slideSpeed: 350,
                paginationSpeed: 800,
                autoPlay: 5000,
                singleItem: true,
                autoHeight: true,
                navigation: false
            });
        }
        if($("#team-carousel").length > 0){
            $("#team-carousel").owlCarousel({
                loop: true,
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items : 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [979,3]
            });
        }
        if($("#feedbacks").length > 0){
            $("#feedbacks").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 400,
                paginationSpeed: 800,
                autoPlay: 5000,
                singleItem: true
            });
        }
        if($("#about-carousel").length > 0){
            $("#about-carousel").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 400,
                paginationSpeed: 800,
                autoPlay: 5000,
                singleItem: true
            });
        }


        /*pm-slider*/
                if($('#pm-slider').length > 0){
                        
            $('#pm-slider').PMSlider({
                speed : 520,
                easing : 'ease',
                loop : true,
                controlNav : true, //false = no bullets / true = bullets / 'thumbnails' activates thumbs
                controlNavThumbs : true,
                animation : 'fade',
                fullScreen : false,
                slideshow : true,
                slideshowSpeed : 7000,
                pauseOnHover : true,
                arrows : true,
                fixedHeight : true,
                fixedHeightValue : 800,
                touch : true,
                progressBar : false
            });
            
        }

        var tabFinish = 0;

        $('.service').click(function(){
        var $t = $(this);
        if(tabFinish || $t.hasClass('active')) return false;
        tabFinish = 1;
        $t.closest('.serv').find('.service').removeClass('active-item');
        $t.addClass('active-item');
        var index = $t.parent().find('.service').index(this);
        console.log(index);
        $t.closest('.serv').find('.serv-description:visible').slideUp(500, function(){
            $t.closest('.serv').find('.serv-description').eq(index).slideDown(500,
                function() {
                    tabFinish = 0;
                });
            });
        });

        $('.nav-tab-item').on('click', function(){
        var $t = $(this);
        if(tabFinish || $t.hasClass('active')) return false;
        tabFinish = 1;
        $t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
        $t.addClass('active');
        var index = $t.parent().parent().find('.nav-tab-item').index(this);
        $t.closest('.tab-wrapper').find('.tabs-content').find('.tab-info:visible').animate({'opacity': '0'},500, function(){
            $(this).hide();
            var newTab = $t.closest('.tab-wrapper').find('.tabs-content').find('.tab-info').eq(index);
            newTab.show().css({'opacity' : '0'});
            if(newTab.find('.swiper-container').length){
                newTab.find('.swiper-container').each(function() {
                    swipers[$(this).attr('data-init')].reInit();
                    swipers[$(this).attr('data-init')].resizeFix();
                });
            }
            newTab.animate({'opacity': '1'},500,function() {
                tabFinish = 0;
            });
        });
    });

        

        /*
            Input Form Animation Codrops http://tympanus.net/codrops/2015/01/08/inspiration-text-input-effects/
        */

        (function() {
            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                // in case the input is already filled..
                if( inputEl.value.trim() !== '' ) {
                    classie.add( inputEl.parentNode, 'input--filled' );
                }

                // events:
                inputEl.addEventListener( 'focus', onInputFocus );
                inputEl.addEventListener( 'blur', onInputBlur );
            } );

            function onInputFocus( ev ) {
                classie.add( ev.target.parentNode, 'input--filled' );
            }

            function onInputBlur( ev ) {
                if( ev.target.value.trim() === '' ) {
                    classie.remove( ev.target.parentNode, 'input--filled' );
                }
            }
        })();

        /*
            Bootstrap Carousel
        */
        if($("#tt-carousel").length > 0){
            $('#tt-carousel').carousel({
                interval: 5000,
                pause: "false"
            });
        }

        if($(".rotate").length > 0) {
            $(".rotate").textrotator({
                animation: "dissolve",
                separator: ",",
                speed: 2000
            });
        }
    });

    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function () {
        $(this).find("dt > a").first().addClass("active").parent().next().css({display: "block"});
    });

    $(".accordion > dt > a").click(function () {
        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");
        return false;
    });

    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

    if($("#map").length > 0){
        // When the window has finished loading create our google map below
        var googleMaps = google.maps.event.addDomListener(window, 'load', initGoogleMaps);
    }

    /* 
     Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
    */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }

    function initCustom () {
         // Add your custom javascript here 
    }

    function initAll () {
        
    }

    initAll();

})(jQuery)