$(document).ready(function () {
    var table = $('#example').DataTable({
        buttons: [
            { extend: 'excel', className: 'styled-btn' },
            { extend: 'pdf', className: 'styled-btn' },
            { extend: 'print', className: 'styled-btn' }
        ]
    });

    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');

    // Apply inline styles for button appearance
    $('.styled-btn').css({
        'background-color': '#0d6efd',  // Blue background
        'color': '#fff',                // White text color
        'border': 'none',               // Remove border
        'padding': '8px 16px',          // Padding for better size
        'margin-right': '10px',         // Space between buttons
        'border-radius': '4px',         // Rounded corners
        'cursor': 'pointer',            // Pointer cursor on hover
        'font-size': '14px',            // Font size
        'transition': 'background-color 0.3s' // Smooth transition effect
    });

    // Hover effect for buttons
    $('.styled-btn').hover(
        function () {
            $(this).css('background-color', '#45a049'); // Darker green on hover
        },
        function () {
            $(this).css('background-color', '#0d6efd'); // Original color on mouse out
        }
    );
});
