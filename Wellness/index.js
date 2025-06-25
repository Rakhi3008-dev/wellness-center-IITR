// Typed.js animation
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
      strings: [
        "Welcome",
        "Welcome to",
        "Welcome to the",
        "Welcome to the Wellness",
        "Welcome to the Wellness Center",
        "Welcome to the Wellness Center (IIT Roorkee)",
      ],
      typeSpeed: 150,
      backSpeed: 500,
      startDelay: 5000,
      showCursor: false,
    });
  });
  
  // Anonymous Journal redirect
  document.getElementById("anonymous-btn").addEventListener("click", function () {
    window.location.href = "anonymous-journal.html";
  });
  
  // Accordion functionality 
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  
  // Panel toggle for cards
  function togglePanel(index) {
    let panels = document.querySelectorAll(".panel");
    panels[index].style.display =
      panels[index].style.display === "block" ? "none" : "block";
  }
  