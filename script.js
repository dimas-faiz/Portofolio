document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Mobile Navigation Menu Toggle
  // ==========================================
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = navToggle.querySelector("i");
      
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    // Menutup menu mobile ketika pengguna mengklik link navigasi
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          const icon = navToggle.querySelector("i");
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // ==========================================
  // 2. Scroll Reveal Intersection Observer
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Efek transisi staggered (berurutan)
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        
        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Mendaftarkan seluruh komponen kartu dan section ke observer
  const animatableElements = document.querySelectorAll(
    ".project-card, .about-card, .info-item, .skill-category, .timeline-item, .contact-card"
  );

  animatableElements.forEach(el => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });
});