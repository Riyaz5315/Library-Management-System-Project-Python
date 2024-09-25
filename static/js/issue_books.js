$(document).ready(function () {
	$('#issueBook').click(function () {
		$('#issuedBookModal').modal('show');  // Show the modal
		$('#issuedBookForm')[0].reset();  // Reset the form fields
		$('.modal-title').html("<i class='fa fa-plus'></i> Issue Book");
		$('#action').val('issueBook');
		$('#issuebookid').val('');  // Clear issue book ID for new entries
		$('#save').val('Save');
	});

	$('#issuedBookForm').on('submit', function (e) {
		e.preventDefault();  // Prevent the default form submission

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: $(this).serialize(),
			success: function (response) {
				$('#issuedBookModal').modal('hide');
				location.reload();  // Reload the page to see the updated list
			},
			error: function (xhr, status, error) {
				console.log('Error:', error);  // Log any errors to the console
			}
		});
	});
});