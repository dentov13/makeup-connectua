$(document).ready(function(){

	let all = $('.blocks').children();

	updateHeight();

	$(window).resize(function() {
  		updateHeight();
	});

	$('.partners').slick({
		infinite: true,
		slidesToShow: 5,
		autoplay:true,
		arrows:false,
		mobileFirst:true,
		touchMove:true,
		responsive:[
		{
			breakpoint:770,
			settings:{
				slidesToShow:5
			}
		},{
			breakpoint:760,
			settings:{
				slidesToShow:3
			}
		}]
	});

	function updateHeight(){
		for(let i=0; i<all.length; i++){
			$(all[i]).css({'min-height':$(window).height()+'px'});
		}
	}

});
