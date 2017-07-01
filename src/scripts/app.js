$(document).ready(function(){

	let all = $('.blocks').children();

	$(all).each((index, item)=>{
		$(item).css({'min-height':$(window).height()+'px'});
	});

	// $('.grid-speakers').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3
	// });

});
