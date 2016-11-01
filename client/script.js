$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=50px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=50px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=50px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=50px"}, 'fast');
				break;
		}
	});
});