$(document).ready(function() {
    // $(document).keydown(function(key) {
    //     switch(parseInt(key.which,10)) {
	// 		// Left arrow key pressed
	// 		case 37:
	// 			$('.mario').animate({left: "-=50px"}, 'fast');
	// 			break;
	// 		// Up Arrow Pressed
	// 		case 38:
	// 			$('.mario').animate({top: "-=50px"}, 'fast');
	// 			break;
	// 		// Right Arrow Pressed
	// 		case 39:
	// 			$('.mario').animate({left: "+=50px"}, 'fast');
	// 			break;
	// 		// Down Arrow Pressed
	// 		case 40:
	// 			$('.mario').animate({top: "+=50px"}, 'fast');
	// 			break;
	// 	}
	// });
	$('.dot').click(function(event) {
		// var x = event.pageX,
		// 	y = event.pageY;

		var position = $('#dot').position();
		var percentLeft = position.left / $('#counter').width() * 100;
		var percentTop = position.top / $('#counter').height() * 100;
		console.log(position);

		$('.mario')
		.animate({
			top: 1300 + '%',
		})
		.animate({
			left: 330
		})
		.animate({
			top: -120
		})
		.animate({
			left: 470
		})
		.animate({
			top: percentTop + '%',
			left: percentLeft + '%'
		});
	});
});