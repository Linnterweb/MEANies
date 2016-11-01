$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('.mario').animate({left: "-=50px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('.mario').animate({top: "-=50px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('.mario').animate({left: "+=50px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('.mario').animate({top: "+=50px"}, 'fast');
				break;
		}
	});
});