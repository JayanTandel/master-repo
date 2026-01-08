// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Simple "Add to Cart" interaction
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cakeName = button.parentElement.querySelector('h3').innerText;
        alert(cakeName + ' has been added to your sweet box!');
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('cakeBookingForm');
if(bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your cake inquiry has been sent. Our chef will contact you shortly.');
        bookingForm.reset();
    });
}