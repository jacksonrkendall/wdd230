document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  if (this.checkValidity()) {
    const formData = new FormData(this);

    console.log('Contact Form Data:');
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    alert('Contact form submitted successfully!');
  } else {
    alert('Please fill out all required fields.');
  }
});
