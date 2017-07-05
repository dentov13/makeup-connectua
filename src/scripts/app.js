$(document).ready(function(){
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
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
  $(".nav-bottom").on("click","a", function (event) {
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
				duration: 4000,
				easing: 'swing',
				step: function (now) {
						$(this).text(Math.ceil(now));
				}
		});
	});
});
