// Get the modal
const modal = document.getElementById("loginModal");

// Get the login button and open the modal when it's clicked
const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Get the close button and close the modal when it's clicked
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Get the profile container, profile picture, and username elements
const profile = document.querySelector(".profile");
const profilePicture = document.querySelector(".profile-picture");
const profileUsername = document.querySelector(".profile-username");

// Validate the login form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "XoticGizmo" && password === "aaa") {
    alert("Login successful!");
    modal.style.display = "none";
    
    // Hide the login button and display the profile picture and username
    loginBtn.style.display = "none";
    profileUsername.textContent = username;
    profile.style.display = "flex";
  } else {
    alert("Invalid username or password.");
  }
});
