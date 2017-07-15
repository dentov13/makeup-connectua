$(document).ready(function(){

	$.fn.isOnScreen = function(){

	    var win = $(window);

	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };
	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();

	    var bounds = this.offset();
	    bounds.right = bounds.left + this.outerWidth();
	    bounds.bottom = bounds.top + this.outerHeight();

	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};


	let menuOn = false;
	let isCounting = false;
	let all = $('.blocks').children();

	updateHeight();

	$(window).resize(function() {
  		updateHeight();
	});

	function updateHeight(){
		let lth = all.length - 1;
		for(let i=0; i<lth; i++){
			$(all[i]).css({'min-height':$(window).height()+'px'});
		}
	}

	$('.togglee').click(()=>{
		toggleMenu();
	});

	$('.ham-mask').click(()=>{
		toggleMenu();
	});

	function toggleMenu(){
		if(menuOn){
			$('.hamburger').find('.ham-menu').css({'left':'-100%'});
			$('.hamburger').fadeOut(150,()=>{
				$('html').removeClass('no-scroll');
			});
			menuOn = !menuOn;
		}else{
			$('.hamburger').fadeIn(150,()=>{
				$('html').addClass('no-scroll');
			});
			$('.hamburger').find('.ham-menu').css({'left':'0%'});
			menuOn = !menuOn;
		}
		
	}


	// $('.partners').slick({
	// 	infinite: true,
	// 	slidesToShow: 5,
	// 	autoplay:true,
	// 	arrows:false,
	// 	mobileFirst:true,
	// 	touchMove:true,
	// 	responsive:[
	// 	{
	// 		breakpoint:770,
	// 		settings:{
	// 			slidesToShow:5
	// 		}
	// 	},{
	// 		breakpoint:760,
	// 		settings:{
	// 			slidesToShow:3
	// 		}
	// 	}]
	// });

	// Sticky menu
	$(window).on('scroll', () => {

		checkCounter();

	    let scrollTop = $(this).scrollTop(),
	    	elem = $('.nav-bottom'),
	    	elemHeight = elem.outerHeight(),
	    	topDistance = $('.nav-bottom').offset().top,
	    	blockHeight = $('.first').height();

        if (topDistance < scrollTop ) {
        	if(!elem.hasClass('fixable'))
        		elem.addClass('fixable');
        }

        if (scrollTop < (blockHeight-elemHeight)) {
        	if(elem.hasClass('fixable'))
        		elem.removeClass('fixable');
        }

	});

	function checkCounter(){
		if ($('.grid-numbers').isOnScreen()) {
			if(isCounting) return;
			isCounting = true;
            $('.count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 10000,
					easing: 'linear',
					step: function (now) {
							$(this).text(Math.ceil(now));
					}
				});
			});
        } else {
            // The element is NOT visible, do something else
        }
	}

	// Tickets
	$('#tickets').click(function() {
		window.location = "http://connectukraine.com/thankyou.html"; 
	});
	$('#tickets-ru').click(function() {
		window.location = "http://connectukraine.com/thankyou_ru.html"; 
	});
	$('#tickets-ua').click(function() {
		window.location = "http://connectukraine.com/thankyou_ua.html"; 
	});

	$('.anchor').click(function(){

		if($(this).attr('href')==='#') {event.preventDefault();return};

		event.preventDefault();

		var id = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 1000);
	});

	$('.m-anchor').click(function(){

		if($(this).attr('href')==='#') {event.preventDefault();return};

		event.preventDefault();

		toggleMenu();

		var id = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 1000);
	});

	// Contact-form
	$('.contact-form').submit(function() {
		var dataString = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "call.php",
			data: {dataString}
		});
	});
});
