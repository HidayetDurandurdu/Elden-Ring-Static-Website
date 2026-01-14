document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMessage');

  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      successMsg.classList.remove('d-none');
      form.classList.remove('was-validated');
    }
  });
});