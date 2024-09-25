$(document).ready(function () {
	$('#addAuthor').click(function () {
		$('#authorModal').modal('show');
		$('#authorForm')[0].reset();
		$('.modal-title').html("<i class='fa fa-plus'></i> Add Author");
		$('#action').val('addAuthor');
		$('#authorid').val('');  // Clear category ID for new entries
		$('#save').val('Save');
	});

	$('#authorForm').on('submit', function (e) {
		e.preventDefault();  // Prevent the default form submission

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: $(this).serialize(),
			success: function (response) {
				$('#authorModal').modal('hide');
				location.reload();  // Reload the page to see the updated list
			},
			error: function (xhr, status, error) {
				console.log('Error:', error);  // Log any errors to the console
			}
		});
	});
});