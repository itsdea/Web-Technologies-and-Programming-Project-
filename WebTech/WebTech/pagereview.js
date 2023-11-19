document.getElementById('survey-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
  
    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      // Add other form fields here
    };
  
    // Save the data (you can use local storage or send it to a server)
    // For example, using local storage:
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(formData);
    localStorage.setItem('reviews', JSON.stringify(reviews));
  
    // Redirect to the review page or show a confirmation message
    window.location.href = 'userreviews.html';
  });
  