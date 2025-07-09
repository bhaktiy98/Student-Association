// Toggle menu open/close
const hamburger = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close the menu when a link is clicked (mobile)
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});



  const scriptURL = 'https://script.google.com/macros/s/AKfycbw5stS_9HKkSw1jPS1EXwRX3ei2L1Q0RWUl9BqcPLCVpaIxqS94Pkdk2StHSNA6gc92tw/exec'; // 👈 Replace with your script URL
  const form = document.getElementById('feedbackForm');
  const responseMsg = document.getElementById('responseMsg');

  form.addEventListener('submit', e => {
    e.preventDefault();
    responseMsg.textContent = "Submitting...";
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        responseMsg.textContent = "✅ Thank you! Your feedback has been submitted.";
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        responseMsg.textContent = "❌ There was an error. Please try again.";
        responseMsg.style.color = "red";
      });
  });
