$(document).ready(function () {
	$('#addBook').click(function () {
		$('#bookModal').modal('show');  // Show the modal
		$('#ibookForm')[0].reset();  // Reset the form fields
		$('.modal-title').html("<i class='fa fa-plus'></i> Add Book");
		$('#action').val('addBook');
		$('#bookid').val('');  // Clear issue book ID for new entries
		$('#save').val('Save');
	});

	$('#issuedBookForm').on('submit', function (e) {
		e.preventDefault();  // Prevent the default form submission

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: $(this).serialize(),
			success: function (response) {
				$('#bookModal').modal('hide');
				location.reload();  // Reload the page to see the updated list
			},
			error: function (xhr, status, error) {
				console.log('Error:', error);  // Log any errors to the console
			}
		});
	});
});