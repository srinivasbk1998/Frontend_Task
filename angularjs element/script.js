<script>
  function validateForm() {
    const emailInput = document.getElementById('email');
    const customFieldInput = document.getElementById('customField');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Custom validation example: Ensure the custom field contains at least 5 characters
    if (customFieldInput.value.length < 5) {
      alert('Custom field must be at least 5 characters long.');
      return false;
    }

    // Add more custom validation logic as needed

    return true; // Submit the form if all validations pass
  }
</script>
