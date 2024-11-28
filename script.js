document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Input fields
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
  
    // Error spans
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
  
    let isValid = true;
  
    // Clear previous errors
    usernameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";
  
    // Validation
    if (username.value.trim() === "") {
      usernameError.textContent = "Username is required.";
      usernameError.style.display = "block";
      isValid = false;
    }
  
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      emailError.textContent = "Enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    }
  
    if (password.value.trim() === "") {
      passwordError.textContent = "Password is required.";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      passwordError.style.display = "block";
      isValid = false;
    }
  
    if (confirmPassword.value.trim() === "") {
      confirmPasswordError.textContent = "Please confirm your password.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    }
  
    // Redirect if valid
    if (isValid) {
      alert("Sign-up successful!");
      window.location.href = "welcome.html"; // Redirect to another page
    }
  });
  