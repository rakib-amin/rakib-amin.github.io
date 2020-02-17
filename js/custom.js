 (function(){
 	$('.parallax-bg').parallax({
          speed: 0.5,
          zIndex: -100
    }); 
 })();

 $(window).load(function() {
        initPreloader();
        $(".preloader").delay(100).fadeOut("slow");
  });

 var support = { animations : Modernizr.cssanimations },
        container = document.getElementById( 'ip-container' ),
        header = container.querySelector( '.ip-header' ),
        loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
        animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
        // animation end event name
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
    function initPreloader() {
        var onEndInitialAnimation = function() {
            if( support.animations ) {
                this.removeEventListener( animEndEventName, onEndInitialAnimation );
            }
            startLoading();
        };
        // initial animation
        classie.add( container, 'loading' );
        if( support.animations ) {
            container.addEventListener( animEndEventName, onEndInitialAnimation );
        }
        else {
            onEndInitialAnimation();
        }
    }
    function startLoading() {
        // simulate loading something..
        var simulationFn = function(instance) {
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.1, 1 );
                    instance.setProgress( progress );
                    // reached the end
                    if( progress === 1 ) {
                        classie.remove( container, 'loading' );
                        classie.add( container, 'loaded' );
                        clearInterval( interval );
                        var onEndHeaderAnimation = function(ev) {
                            if( support.animations ) {
                                if( ev.target !== header ) return;
                                this.removeEventListener( animEndEventName, onEndHeaderAnimation );
                            }
                        };
                        if( support.animations ) {
                            header.addEventListener( animEndEventName, onEndHeaderAnimation );
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80 );
        };
        loader.setProgressFn( simulationFn );
    }
