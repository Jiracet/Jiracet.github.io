$(document).ready(function() {

	var numStripes = rand(10, 15);
	var width = $(window).width();

	for (var i = 0; i < numStripes; i++) {
		var colour = "#ffffff";
		var randomColour = rand(5, 0);

		switch (randomColour) {
			case 0:
				colour = "#fff5d1";
				break;
			case 1:
				colour = "#fba0fc";
				break;
			case 2:
				colour = "#9e76b6";
				break;
			case 3:
				colour = "#6ec8f0";
				break;
			case 4:
				colour ="#abfca0"; //"#f3f18f";
		}

		$(".stripe").append("<div class=.sub-stripe style=\"background-color:" + colour +
		" ; height:" + rand(15, 1) + "px\"></div>");
	}

	$('.icon').hover(function() {
		$("img", this).stop().animate({opacity: 1}, "fast");
	}, function() {
		$("img", this).stop().animate({opacity: 0.4}, "fast");
	});

	$('.project-cell .img-container').hover(function() {
		$("img", this).stop().animate({opacity: 1}, "fast");
	}, function() {
		$("img", this).stop().animate({opacity: 0.8}, "fast");
	});

	$(window).resize();
});

$(window).resize(function() {
	width = $(window).width();

	if (width < 970) {
		$("#main-container").css('width', '100%');
		$("#side-bar").css('width', '100%');
	} else {
		$("#main-container").css('width', '66%');
		$("#side-bar").css('width', '33%');
	}
});

// returns random number with length and start index start
function rand(length, start) {
	return Math.floor(Math.random() * length + start);
}