$(document).ready(function() {
	$(window).resize();

	var numStripes = rand(3, 20);
	var width = $(window).width();

	for (var i = 0; i < numStripes; i++) {
		var colour = "#ffffff";
		var randomColour = rand(5, 0);

		switch (randomColour) {
			case 0:
				colour = "#79BEEE";
				break;
			case 1:
                //pink
				colour = "#B7D3F2";
				break;
			case 2:
                //purple
				colour = "#AFAFDC";
				break;
            case 3:
                //purple
				colour = "#8A84E2";
				break;
            case 4:
                //purple
				colour = "#84AFE6";
				break;
                
            // fba0fc pink
            // 9e76b6 purple
            // 9e76b6 blue
            // abfca0 green
            // e24c72 red
            // ffec83 yellow
                
		}

		$(".stripe").append("<div class=.sub-stripe style=\"background-color:" + colour +
		" ; height:" + rand(7, 3) + "px\"></div>");
	}

	/*
	$('.icon').hover(function() {
		$("img", this).stop().animate({opacity: 1}, "fast");
	}, function() {
		$("img", this).stop().animate({opacity: 0.4}, "fast");
	});

	$('.project-cell .img-container').hover(function() {
		$("img", this).stop().animate({opacity: 1}, 50, 'linear');
	}, function() {
		$("img", this).stop().animate({opacity: 0.8}, 50, 'linear');
	});
	*/
});

/*
$(window).resize(function() {
	width = $(window).width();

	if (width < 970) {
		$("#main-container").css('width', '100%');
		$("#side-bar").css('width', '100%');
	} else {
		$("#main-container").css('width', '66%');
		$("#side-bar").css('width', '33%');
	}
});*/


$(window).resize(function() {
	width = $(window).width();

	if (width < 600) {
		$(".project-cell").css('display', 'block');
		$(".img-container").css('display', 'block');
		$(".img-container").css('width', '100%');
		$(".project-cell .info").css('display', 'block');
		$(".project-cell .info").css('padding-left', '0');
	} else {
		$(".project-cell").css('display', 'table');
		$(".img-container").css('display', 'table-cell');
		$(".img-container").css('width', '20em');
		$(".project-cell .info").css('display', 'table-cell');
		$(".project-cell .info").css('padding-left', '2em');
	}
});

// returns random number with length and start index start
function rand(length, start) {
	return Math.floor(Math.random() * length + start);
}