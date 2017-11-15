window.onload = function() {
	TweenMax.from( '.logo__1', 4, {
			x: "-100%"
		})	
	TweenMax.from( '.logo__2', 1, {
				y: -100
		})
	TweenMax.from('.text', 3, {
		y: -300,
		scale: 1, 
		autoAlpha: 0,
		delay: 2,
	});

}
