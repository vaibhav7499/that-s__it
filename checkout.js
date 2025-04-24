document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const photo = document.getElementById('photo').files[0];

    // Basic validation
    if (!name || !address || !photo) {
        alert('Please fill in all fields and upload a photo.');
        return;
    }

    // Here you can handle the form submission, e.g., send data to a server
    alert('Order submitted successfully!');

    // Reset the form
    document.getElementById('checkout-form').reset();
});