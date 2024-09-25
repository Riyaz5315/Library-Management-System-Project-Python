$(document).ready(function () {
    // Event listener for the "Issue Book" button to show the modal
    $('#issueBook').click(function () {
        $('#issuedBookModal').modal('show');  // Show the modal
        $('#issuedBookForm')[0].reset();  // Reset the form fields
        $('.modal-title').html("<i class='fa fa-plus'></i> Issue Book");  // Set modal title
        $('#action').val('issueBook');  // Set action value for form submission
        $('#issuebookid').val('');  // Clear issue book ID for new entries
        $('#save').val('Save');  // Set button text
    });

    // Event listener for the form submission
    $('#issuedBookForm').on('submit', function (e) {
        e.preventDefault();  // Prevent the default form submission

        $.ajax({
            url: $(this).attr('action'),  // The URL to submit the form to
            type: 'POST',  // Form submission type
            data: $(this).serialize(),  // Serialize the form data for submission
            success: function (response) {
                console.log('Response received:', response);  // Log the response to check structure
                $('#issuedBookModal').modal('hide');  // Hide the modal on success

                // Update the statistics and the chart after a successful issue
                updateStatistics(response);  // Update the card statistics
                updateChart();  // Update the chart with the new data
            },
            error: function (xhr, status, error) {
                console.log('Error:', error);  // Log any errors to the console
            }
        });
    });
});

let myChart;

window.onload = function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Initialize the chart
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Books', 'Books Issued', 'Manage Books', 'Fine Collected'],
            datasets: [{
                label: 'Library Statistics',
                data: getCardData(),  // Get initial data from the cards
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true  // Start y-axis at zero
                }
            }
        }
    });
};

// Function to get data from the cards
function getCardData() {
    return [
        parseInt(document.getElementById('totalBooks').textContent, 10),  // Total Books count
        parseInt(document.getElementById('booksIssued').textContent, 10),  // Books Issued count
        parseInt(document.getElementById('manageBooks').textContent, 10),  // Manage Books count
        parseInt(document.getElementById('fineCollected').textContent, 10)  // Fine Collected count
    ];
}

// Function to update the chart data
function updateChart() {
    myChart.data.datasets[0].data = getCardData();  // Update chart data with current stats
    myChart.update();  // Refresh the chart display
}

// Function to update the statistics displayed on the page
function updateStatistics(data) {
    // Check if data contains the necessary fields
    if (data && typeof data.booksIssued !== 'undefined') {
        // Update the "Books Issued" card
        document.getElementById('booksIssued').textContent = data.booksIssued;
        // Update other statistics if necessary
        if (typeof data.totalBooks !== 'undefined') {
            document.getElementById('totalBooks').textContent = data.totalBooks;
        }
        if (typeof data.manageBooks !== 'undefined') {
            document.getElementById('manageBooks').textContent = data.manageBooks;
        }
        if (typeof data.fineCollected !== 'undefined') {
            document.getElementById('fineCollected').textContent = data.fineCollected;
        }
    } else {
        console.error('Error: Data format incorrect or missing "booksIssued" field:', data);
    }
}



