$(document).ready(function() {

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();

	});
	
	$('#header a').hover(function() {
		$(this).stop();
		$(this).animate({color:'#585858'}, 100);
	}, function() {
		$(this).animate({color:'#ffffff'}, 0);
	});

	$('#header li').hover(function() {
		$(this).stop();
		switch($('#header li').index(this)){
			case 0:
				$(this).animate({backgroundColor:'#acfda1'}, 100);
				break;
			case 1:
				$(this).animate({backgroundColor:'#fda1a1'}, 100);
				break;
			case 2:
				$(this).animate({backgroundColor:'#a1e8fd'}, 100);
				break;
			case 3:
				$(this).animate({backgroundColor:'#bda1fd'}, 100);
				break;
		}
	}, function() {
		$(this).animate({backgroundColor:'#585858'}, 0);
	});
});