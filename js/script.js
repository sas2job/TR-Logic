$(document).ready(function() {
	$('[data-button]').click(function() {
		var $button = $(this);
		var mode = $button.attr('data-mode');
		var id = $button.attr('data-id');
		var direction = $button.attr('data-direction');
		
		$('[data-panel="'+id+'"]').effect(
			'slide',
			{direction: direction, mode: mode}, 
			1000,
			function() {
				if (mode == 'hide') {
					$(this).hide();
				}
				
				mode = mode == 'show' ? 'hide' : 'show';
				$button.attr('data-mode', mode);
			}
		);
	});
	$('[data-button="right"]').click(function() {
		$('[data-panel="right"]').animate({width: 0}, 1000);
	});
});
