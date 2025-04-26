// scripts.js

// -------------------- Typewriter Effect for Hero --------------------
document.addEventListener("DOMContentLoaded", () => {
  const typeTarget = document.querySelector("#typewriter"); // Corrected selector
  if (typeTarget) {
    const words = ["Hot", "Juicy", "Fresh", "Spicy", "Royal Wraps!"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[wordIndex];
      const displayed = isDeleting
        ? currentWord.substring(0, letterIndex--)
        : currentWord.substring(0, letterIndex++);

      typeTarget.textContent = displayed;

      if (!isDeleting && letterIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
        setTimeout(type, 200); // Delay before typing the next word
      } else {
        setTimeout(type, 100); // Regular typing speed
      }
    }

    type(); // Initialize the typewriter effect
  }
});

  // -------------------- Pre-order Form Submit (Mock) --------------------
  const preorderForm = document.getElementById("preorder-form");
  
  if (preorderForm) {
    preorderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Pre-order submitted! We'll DM you on Instagram soon.");
      preorderForm.reset();
    });
  }
  
  // -------------------- Fade In On Scroll --------------------
  const fadeElements = document.querySelectorAll(".fade-in");
  
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  fadeElements.forEach((el) => {
    appearOnScroll.observe(el);
  });
  