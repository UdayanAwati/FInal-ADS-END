document.addEventListener("DOMContentLoaded", () => {
    // Handle login
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const adminUsername = "admin";
        const adminPassword = "admin123";

        // Admin login check
        if (username === adminUsername && password === adminPassword) {
            window.location.href = "admin.html";
        } else {
            const storedPassword = localStorage.getItem(username);

            if (storedPassword && storedPassword === password) {
                // Redirect to student dashboard
                localStorage.setItem("loggedInUser", JSON.stringify(username)); // Store logged-in user
                window.location.href = "student.html";
            } else {
                alert("Invalid username or password.");
            }
        }
    });
});
