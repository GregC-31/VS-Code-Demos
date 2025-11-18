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
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Collect form data using a query selector
    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#lname").value;

    // Submit form to console
    console.log(`Form submitted: ${firstName} ${lastName}`);

    // Reset the form
    document.getElementById("contactForm").reset();
  }
};

