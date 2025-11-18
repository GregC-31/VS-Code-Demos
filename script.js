function toggleMenu(evt) {
    console.log('evt', evt);
    
    // Toggle nav-list
    let nav = document.querySelector("#nav-list");

    console.log('nav', nav);
    if (nav.style.display === "block") {
        evt.target.innerText = "=";
        nav.style.display = "none";
        nav.style.transition = "opacity 0.1s ease-out";
        nav.style.opacity = 0;
    } else {
        evt.target.innerText = "x";
        nav.style.display = "block";
        nav.style.transition = "opacity 0.1s ease-in";
        nav.style.opacity = 1;
    }
}

document.addEventListener("DOMContentLoaded", function()) {

    var contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event)) {

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Collect form data using a query selector
            const firstName = document.querySelector("#fname").value;
            const lastName = document.querySelector("#lname").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;
            const phone = document.querySelector("#phone").value;
            const errorMsg = document.querySelector(".error");
            console.log(errorMsg);

            // regex to validate an email address
            const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/;

            // validate email format
            if (!emailRegex.test(email)) {

                return;
            }


        // Submit form to console
        console.log(`Form submitted: ${firstName} ${lastName}`);

        // Reset the form
        contactForm.reset();
  }
};

