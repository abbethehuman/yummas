document.getElementById('waitlistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for joining the waitlist!');
    document.getElementById('waitlistForm').reset();
});
