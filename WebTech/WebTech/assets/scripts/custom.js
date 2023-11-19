setInterval(() => {
    document.getElementById("currentYear").innerHTML = new Date().toLocaleTimeString();
}, 1000)

function validateAndSubmit(event) {
    event.preventDefault();

    
    clearErrors();

    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const selectInput = document.getElementById('select_book');
    const selectedOption = selectInput.options[selectInput.selectedIndex];
    const description = document.getElementById("description").value;

    
    if (validateForm(fullName, username, email, selectedOption, description)) {
        
        const submitBtn = document.getElementById("submitBtn");
        const closeBtn = document.getElementById("closeModal");
        const closeBtn1 = document.getElementById("closeModal1");
        const modal = document.getElementById("modal");

        submitBtn.addEventListener("click", () => modal.classList.add("open"));
        closeBtn.addEventListener("click", () => modal.classList.remove("open"));
        closeBtn1.addEventListener("click", () => modal.classList.remove("open"));


}}

/*this is the code using local storage to store reviews of user in the books page*/

function saveInformation() {
    var selectedBook = document.getElementById("select_book").value;
    var description = document.getElementById("description").value;

    
    var existingInformation = JSON.parse(localStorage.getItem("information")) || [];

    
    existingInformation.push({
        book: selectedBook,
        description: description
    });

    
    localStorage.setItem("information", JSON.stringify(existingInformation));

    
    window.location.href = "books.html";
}

  function displayInformation() {
    var savedInformation = JSON.parse(localStorage.getItem("information")) || [];
    var displayElement = document.getElementById("informationDisplay");

    if (savedInformation.length > 0) {
        displayElement.innerHTML = ""; 

        savedInformation.forEach(function (info, index) {
            displayElement.innerHTML += (index + 1) + ". ";

            
            if (info.book !== undefined) {
                displayElement.innerHTML += "Book: " + info.book + "<br>";
            }

            if (info.description !== undefined) {
                displayElement.innerHTML += "Description: " + info.description + "<br>";
            }

            
            displayElement.innerHTML += '<button class="deleteBtnReview" data-index="' + index + '">Delete Review</button><br>';
        });

        
        displayElement.addEventListener('click', function(event) {
            if (event.target.classList.contains('deleteBtnReview')) {
                
                var index = event.target.getAttribute('data-index');
                deleteReview(index);
            }
        });
    } else {
        displayElement.innerHTML = "You currently have no book reviews. If you have read any of these books, share your thoughts about it";
    }
}

function deleteReview(index) {
    var savedInformation = JSON.parse(localStorage.getItem("information")) || [];

    
    savedInformation.splice(index, 1);

    
    localStorage.setItem("information", JSON.stringify(savedInformation));

    
    displayInformation();
}



function validateForm(fullName, username, email, selectedOption, description) {
    
    let isValidated = true;

    if (fullName.length < 3) {
        document.getElementById("fullNameSpn").innerHTML = "Full name must be min 3 chars!";
        isValidated = false;
    }

    if (username.length < 3) {
        document.getElementById("usernameSpn").innerHTML = "Full username must be min 3 chars!";
        isValidated = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailSpn').innerHTML = "Please enter a valid email address!<br>";
        isValidated = false;
    }

    if (selectedOption.value === 'default') {
        document.getElementById("selectSpn").innerHTML = "Please choose a book! <br>";
        isValidated = false;
    }

    if (description.length < 3) {
        document.getElementById("descriptionSpn").innerHTML = "Description must be min 3 chars!";
        isValidated = false;
    }

    return isValidated;
}

function clearErrors() {
    
    const errorSpans = document.querySelectorAll(".error-span");
    errorSpans.forEach(span => span.innerHTML = "");
}

function clearFormFields() {
    
    const formFields = document.querySelectorAll("input, textarea, select");
    formFields.forEach(field => field.value = "");
}