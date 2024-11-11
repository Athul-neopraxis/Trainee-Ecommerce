// Validate login credentials
function validateLogin(event) {
    // Prevent the form from submitting and page refresh
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Retrieve stored user data from localStorage
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      // Check if email and password match
      if (email === userData.email && password === userData.password) {
        alert("Login successful! Redirecting to home page.");
        window.location.href = "detail.html"; // Redirect to home page
      } else {
        alert(
          "Email address and password does not match! Please try again."
        );
      }
    } else {
      alert("No user data found. Please register first.");
    }
  }