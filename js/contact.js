// Wait until the webpage is fully loaded before running this script
document.addEventListener("DOMContentLoaded", function () {

    // Get the contact form and listen for the submit action
    document.querySelector("form[name='contactForm']").addEventListener("submit", function (event) {
        
        event.preventDefault(); // Stop the page from reloading when the form is submitted

        // Get the values from the form fields
        var name = document.forms["contactForm"]["name"].value;
        var email = document.forms["contactForm"]["email"].value;
        var message = document.forms["contactForm"]["message"].value;

        // A pattern to check if the email is in a correct format (like name@example.com)
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Check if any of the fields are empty
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("All fields must be filled out."); // Show an alert message
            return false; // Stop the form from being sent
        }

        // Check if the email is written correctly
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address."); // Show an alert if the email is incorrect
            return false; // Stop the form from being sent
        }

        // If everything is correct, take the user to the Thank You page
        window.location.href = "thankyou.html";
    });

});
