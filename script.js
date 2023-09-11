function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LeOUxgoAAAAAJcJa6PexmKyVKekry56LTAWfJco', {action: 'LOGIN'});
      // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
      // reCAPTCHA Enterprise to the end user's browser.
      // This token must be validated by creating an assessment.
      // See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
    });
  }






document.getElementById("contact-form").addEventListener("submit", (event) => {
    const contactForm = event.target
    if (!validateContactForm(contactForm)) {
      event.preventDefault();
      displayError(contactForm, 'Invalid input')
    }
  });

  // Function to validate email addresses
  function isValidEmail(email) {
    // Define the JS Regex pattern for a valid email address
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    // Test the email against the pattern and return the result (true or false)
    return emailRegex.test(email);
  }
  
  // Function to validate phone numbers
  function isValidPhoneNumber(phone) {
    // Define the JS Regex pattern for a valid 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    
    // Test the phone number against the pattern and return the result (true or false)
    return phoneRegex.test(phone);
  }

  // Function to validate the contact form
function validateContactForm(contactForm) {
    // Get the values entered in the form fields
    const name = contactForm["name"].value;
    const email = contactForm["email"].value;
    const phone = contactForm["phone"].value;
    const message = contactForm["message"].value;
  
    // Check if the required fields (name, email, and message) are empty
    // If any of them are empty, return false to prevent form submission
    if (!name || !email || !message) {
      return false;
    }
  
    // Check if the email is valid using the isValidEmail function
    // If the phone field is not empty, also check if it is valid using the isValidPhoneNumber function
    // If either the email or the phone number is invalid, return false to prevent form submission
    if (!isValidEmail(email) || (phone && !isValidPhoneNumber(phone))) {
      return false;
    }
  
    // If all the validations pass, return true to allow form submission
    return true;
  }

  // Function to display an error message on the web page
  function displayError(formElement, message) {
    const errorElement = formElement.getElementsByClassName("form-error")[0];
    
    // Set the innerHTML of the error element to the provided error message
    errorElement.innerHTML = message;
    
    // Change the display style of the error element to "block" to make it visible
    errorElement.style.display = "block";
  }