$(document).ready(function() {

	var numStripes = rand(10, 15);

	for (var i = 0; i < numStripes; i++) {
		var colour = "#ffffff";
		var randomColour = rand(5, 0);

		switch (randomColour) {
			case 0:
				colour = "#ffeba4";
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

	$('.icon img').hover(function() {
		$(this).stop().animate({opacity: 1}, "fast");
	}, function() {
		$(this).stop().animate({opacity: 0.4}, "fast");
	});
});

// returns random number with length and start index start
function rand(length, start) {
	return Math.floor(Math.random() * length + start);
}