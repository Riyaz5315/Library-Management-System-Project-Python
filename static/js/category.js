$(document).ready(function () {
    // Ensure only one click handler is attached
    $('#addCategory').off('click').on('click', function () {
        $('#categoryModal').modal('show');
        $('#categoryForm')[0].reset();
        $('.modal-title').html("<i class='fa fa-plus'></i> Add Category");
        $('#action').val('addCategory');
        $('#categoryid').val('');  // Clear category ID for new entries
        $('#save').val('Save');
    });

    // Ensure only one submit handler is attached
    $('#categoryForm').off('submit').on('submit', function (e) {
        e.preventDefault();  // Prevent the default form submission

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#categoryModal').modal('hide');
                location.reload();  // Reload the page to see the updated list
            },
            error: function (xhr, status, error) {
                console.log('Error:', error);  // Log any errors to the console
            }
        });
    });
});
