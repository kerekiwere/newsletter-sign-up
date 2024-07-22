const submitButton = document.getElementById("submit");
const dismissButton = document.getElementById("dismiss");
const signupForm = document.getElementById("signup");
const successForm = document.getElementById("success");

// Function to validate the email format
function validateEmail(email) {
  // Check if the email is empty
  if (!email) {
    return "Email is required";
  }

  // Regular expression pattern to match valid email formats
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email";
  }
}

// Function to validate the form on submission
function validateForm(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const errorMessage = validateEmail(email);

  // Check if there is an error message
  if (errorMessage) {
    document.getElementById("email-error").innerText = errorMessage;
  } else {
    // Hide the signup form and show the success form
    signupForm.classList.add("d-none");
    successForm.classList.remove("d-none");
    // Display the email in the success message
    document.getElementById("email-success").innerText = email;
  }
}

// Validate the form on click
submitButton.addEventListener("click", validateForm);
// Reload the page on click
dismissButton.addEventListener("click", function () {
  location.reload();
});
