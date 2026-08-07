document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          success.classList.add("show");
          success.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          response.json().then(function (data) {
            var msg =
              data && data.errors
                ? data.errors.map(function (err) { return err.message; }).join(", ")
                : "Something went wrong. Please try again or email us directly.";
            alert(msg);
          });
        }
      })
      .catch(function () {
        alert("Something went wrong. Please try again or email us directly.");
      });
  });
});
