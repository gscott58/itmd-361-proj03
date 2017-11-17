$( document ).ready(function() {	
	$('#animate-demo1').on('click', function () {
	   $('#animate-demo1').rotator({
			// Initial degree
			degree: 1,
			// degree changes on each rotate
			incrementor: 1,
			// animation speed
			speed: 0100,
			// true = anti-clockwise
			reverse: false
			});
	});
});