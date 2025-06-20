(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("revealButton");
    var email = document.getElementById("email");

    button.addEventListener("click", function () {
      email.style.display = "block";
      email.style.opacity = 0;
      var opacity = 0;

      var fade = setInterval(function () {
        opacity += 0.05;
        email.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fade);
      }, 30);

      button.disabled = true;
      button.textContent = "Email Revealed!";
      button.style.backgroundColor = "#999";
    });
  });
})();
