function toggleTheme() {
  document.body.classList.toggle("dark");
}

function login(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter valid login.");
  }
}

function otpLogin(e) {
  e.preventDefault();
  const mobile = document.getElementById("mobile").value;
  if (mobile.length === 10) {
    alert("OTP sent (mock). You're now logged in.");
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Enter a valid 10-digit number.");
  }
}

function checkLogin() {
  const logged = localStorage.getItem("loggedIn");
  if (logged === "true") {
    document.getElementById("lockedContent").style.display = "block";
  } else {
    document.getElementById("lockedContent").style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged out.");
  window.location.href = "index.html";
}
