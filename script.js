<script>


const form = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");
const clearButton = document.getElementById("clearButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Validate Full Name
  if (fullName.value.trim() === "") {
    nameError.textContent = "Full Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value)) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Phone Number
  if (phone.value.trim() === "") {
    phoneError.textContent = "Phone Number is required.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Validate Subject
  if (subject.value === "") {
    subjectError.textContent = "Please select a subject.";
    isValid = false;
  } else {
    subjectError.textContent = "";
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  if (isValid) {
    successMessage.textContent = "Your message has been sent successfully!";
    form.reset();
  }
});

// Clear All Button
clearButton.addEventListener("click", () => {
  form.reset();
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";
});
 </script>
