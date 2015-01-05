$(() => {
	var $paper = $(".paper");
	var $selected = null;
	var id = 1;

	$paper.click((event) => {

		if ($selected) $selected.removeClass('selected');

		$selected = $(document.elementFromPoint(event.clientX, event.clientY));

		if (!$selected.hasClass('note')) {
			$selected = $('<textarea class="note"></textarea>');
			$selected
				.css({top: event.clientY - 10 + $(window).scrollTop(), left: event.clientX + $(window).scrollLeft()})
				.attr('data-id', id++)
				.appendTo($paper);
		}

		$selected.addClass('selected').focus();

		console.log(event.clientX, event.clientY, $selected);
	});
	
	$(window).keyup(() => $paper.focus());
});
