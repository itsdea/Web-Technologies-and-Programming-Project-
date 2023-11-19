document.addEventListener('DOMContentLoaded', () => {
    const ratingContainers = document.querySelectorAll('.rating');

    ratingContainers.forEach((container) => {
        const stars = container.querySelectorAll('.star');
        const averageMessage = container.querySelector('.average');
        let selectedStar = null;

        function colorStars(index) {
            stars.forEach((s, i) => {
                const sValue = parseFloat(s.getAttribute('data-value'));
                s.style.color = i <= index ? '#ff009d' : 'rgb(20, 20, 20)';
            });
        }

        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                colorStars(index);
            });

            star.addEventListener('mouseout', () => {
                colorStars(selectedStar !== null ? selectedStar : 'null');
            });

            star.addEventListener('click', () => {
                const value = parseFloat(star.getAttribute('data-value'));
                selectedStar = index;
                colorStars(selectedStar);
                averageMessage.textContent = `Your rating is: ${value.toFixed(1)}/5.0`;
            });
        });
    });
});

function myFunction(myBtnId, dotsId, moreId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(myBtnId);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }