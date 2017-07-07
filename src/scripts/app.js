$(document).ready(function(){
	let menuOn = false;
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
				$('body').removeClass('no-scroll');
			});
			menuOn = !menuOn;
		}else{
			$('.hamburger').fadeIn(150,()=>{
				$('body').addClass('no-scroll');
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

	// Smooth scroll
  $(".nav-top").on("click","a", function (event) {
  	if($(this).find('div').hasClass('langs') || $(this).find('div').hasClass('lang')) return;
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
  $(".nav-bottom").on("click","a", function (event) {
  	if($(this).find('div').hasClass('langs') || $(this).find('div').hasClass('lang')) return;
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

	// Counting numbers
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
