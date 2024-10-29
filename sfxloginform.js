document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("message");

    // Set specific valid credentials
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        messageDiv.textContent = "Login successful!";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "Invalid username or password.";
        messageDiv.className = "message error";
    }
});