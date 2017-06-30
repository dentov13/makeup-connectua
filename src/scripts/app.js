$(document).ready(function(){
	let all = $('.blocks').children();
	let first = $('.blocks').children().first();
	let last = $('.blocks').children().last();
	
	// $(first).height($(window).height());
	// $(last).height($(window).height());

	$(all).each((index, item)=>{
		$(item).css({'min-height':$(window).height()});
	});
});

$(document).ready(function(){
	$('.grid-speakers').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
});
