const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a[href*='#']");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");

      navLinks.forEach((links) => {
        links.classList.remove("active");
      });

      const activeLink = document.querySelector(`nav a[href='#${id}']`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    } else {
      // sec.classList.remove("show-animate");
    }
  });
};

// Handle click for certificate images
function toggleImage(element) {
  const certificateContainer = element;
  certificateContainer.classList.toggle("clicked");
}

// Add event for escape key press on certificate images
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const certificateContainer = document.querySelectorAll(
      ".certificate-container.clicked"
    );
    certificateContainer.forEach(function (container) {
      container.classList.remove("clicked");
    });
  }
});

document.removeEventListener("keydown", Event);
