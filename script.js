const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  const totalSlides = slides.length;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Set the active class for the current slide
  slides[index].classList.add("active");

  // Adjust the transform property to slide the content
  const translateX = -index * 100; // Calculate the position to slide to
  document.querySelector(
    ".running-content"
  ).style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Cycle through slides
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 7 seconds
setInterval(nextSlide, 7000);

document.addEventListener("DOMContentLoaded", () => {
  const circularProgresses = document.querySelectorAll(".circular-progress");

  circularProgresses.forEach((circularProgress) => {
    const progressValue = circularProgress.querySelector(".progress-value");
    const progressEndValue = circularProgress.getAttribute("data-progress");
    let progressStartValue = 0;
    let speed = 100;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(var(--secondary-color) ${
        progressStartValue * 3.6
      }deg, #fff 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  });
});

// JavaScript for form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const successMessage = document.querySelector(".success-message");
    const errorMessage = document.querySelector(".error-message");

    // Simple form validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && subject && message) {
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      successMessage.style.display = "none";
      errorMessage.style.display = "block";
    }

    // Reset the form
    document.getElementById("contactForm").reset();
  });
