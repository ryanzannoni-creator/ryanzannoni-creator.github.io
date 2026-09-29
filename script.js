// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Find all page sections
const sections = [
  ...document.querySelectorAll("main section[id]")
];


// Find all sidebar navigation links
const navLinks = [
  ...document.querySelectorAll(".side-nav a")
];


// Highlight the navigation link for the section
// currently visible on the screen
if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {

          const sectionMatches =
            link.getAttribute("href") ===
            `#${entry.target.id}`;

          link.classList.toggle(
            "active",
            sectionMatches
          );

        });

      });

    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0
    }
  );


  sections.forEach((section) => {
    observer.observe(section);
  });

}
