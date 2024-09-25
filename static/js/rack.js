$(document).ready(function () {
    // Corrected button ID to match the HTML
    $('#addUser').click(function () {
        $('#rackModal').modal('show');
        $('#rackForm')[0].reset();
        $('.modal-title').html("<i class='fa fa-plus'></i> Add rack");
        $('#action').val('addRack');
        $('#rackid').val('');  // Clear rack ID for new entries
        $('#save').val('Save');
    });

    $('#rackForm').on('submit', function (e) {
        e.preventDefault();  // Prevent the default form submission

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#rackModal').modal('hide');
                location.reload();  // Reload the page to see the updated list
            },
            error: function (xhr, status, error) {
                console.log('Error:', error);  // Log any errors to the console
            }
        });
    });
});
