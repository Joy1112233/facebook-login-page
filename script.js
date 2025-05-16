 document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const contact = document.getElementById("contact").value.trim();
      const password = document.getElementById("password").value;
      const errorMessage = document.getElementById("error-message");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{11}$/;

      if (!emailPattern.test(contact) && !phonePattern.test(contact)) {
        errorMessage.innerText = "Please enter a valid email or 11-digit phone number.";
        return;
      }

      if (password.length < 4) {
        errorMessage.innerText = "Password must be at least 4 characters.";
        return;
      }

      // সব কিছু ঠিক থাকলে, অন্য পেজে রিডাইরেক্ট করো
      // উদাহরণ: login-success.html
      window.location.href = "login-success.html";
    });