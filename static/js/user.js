$(document).ready(function () {
	$('#addUser').click(function () {
		$('#userModal').modal('show');
		$('#userForm')[0].reset();
		$('.modal-title').html("<i class='fa fa-plus'></i> Add user");
		$('#action').val('addUser');
		$('#userid').val('');  // Clear category ID for new entries
		$('#save').val('Save');
	});

	$('#userForm').on('submit', function (e) {
		e.preventDefault();  // Prevent the default form submission

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: $(this).serialize(),
			success: function (response) {
				$('#userModal').modal('hide');
				location.reload();  // Reload the page to see the updated list
			},
			error: function (xhr, status, error) {
				console.log('Error:', error);  // Log any errors to the console
			}
		});
	});
});