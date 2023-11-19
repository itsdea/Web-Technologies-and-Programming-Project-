setInterval(() => {
  document.getElementById("currentYear").innerHTML = new Date().toLocaleTimeString();
}, 1000)

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('survey-form');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      var formData = new FormData(form);
      var formDataObject = {};
      formData.forEach(function (value, key) {
          formDataObject[key] = value;
      });

      console.log('Form Data Submitted:', formDataObject);

      var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push(formDataObject);
      localStorage.setItem('reviews', JSON.stringify(reviews));

      form.reset();
  });
});
