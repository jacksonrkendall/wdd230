document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();

  if (this.checkValidity()) {
    const formData = new FormData(this);

    console.log('Reservation Form Data:');
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    alert('Reservation submitted successfully!');
  } else {
    alert('Please fill out all required fields.');
  }
});
