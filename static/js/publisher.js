$(document).ready(function () {
	$('#addPublisher').click(function () {
		$('#publisherModal').modal('show');
		$('#publisherForm')[0].reset();
		$('.modal-title').html("<i class='fa fa-plus'></i> Add Category");
		$('#action').val('addPublisher');
		$('#publisherid').val('');  // Clear category ID for new entries
		$('#save').val('Save');
	});

	$('#publisherForm').on('submit', function (e) {
		e.preventDefault();  // Prevent the default form submission

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: $(this).serialize(),
			success: function (response) {
				$('#publisherModal').modal('hide');
				location.reload();  // Reload the page to see the updated list
			},
			error: function (xhr, status, error) {
				console.log('Error:', error);  // Log any errors to the console
			}
		});
	});
});