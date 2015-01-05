$(() => {
	var $paper = $(".paper");
	var $toolbar = $(".toolbar");

	var $selected = null;
	var id = 1;

	$paper.click((event) => {
		$('<textarea class="note"></textarea>')
			.css({top: event.clientY + $(window).scrollTop() - 42, left: event.clientX + $(window).scrollLeft()})
			.attr('data-id', id++)
			.appendTo($paper)
			.click();
	});

	$paper.on('click', '.note', (event) => {

		if ($selected) $selected.removeClass('selected');

		$selected = $(event.target).addClass('selected').focus();

		return false;
	});

	$paper.on('click', '.note', (event) => {
		if ($toolbar.children('.var').hasClass('note-actions')) return;

		$toolbar.children('.var')
			.attr('class', 'button-set var note-actions')
			.html('<button class="button-erase">erase</button>');
	});

	$paper.on('blur', '.note', (event) => {
		var $note = $(event.target);
		if ('' === $.trim($note.val())) {
			delete_note(+$note.attr('data-id'));
		}
	});

	$(window).keyup(() => $selected && $selected.focus());

	$toolbar.on('click', '.button-erase', (event) => {
		if ($selected) {
			delete_note(+$selected.attr('data-id'));
			$selected = null;
		}
	})

	var delete_note = function (id) {
		$('.note[data-id=' + id + ']').remove();
	};

});
