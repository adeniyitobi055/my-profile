const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a[href*='#']");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 130;
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
      sec.classList.remove("show-animate");
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

// // Handle section animation

// document.addEventListener("DOMContentLoaded", function () {
//   // Function to check if an element is in viewport
//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement).clientHeight &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   // Function to handle scroll event
//   function handleScroll() {
//     const animatedSections = document.querySelectorAll(
//       ".hero-section, .about-section"
//     );

//     animatedSections.forEach((section) => {
//       if (isInViewport(section)) {
//         section.style.opacity = 1;
//         section.style.transform = "translateY(0)";
//       }
//     });
//   }

//   // Add event lister for scroll event
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();
// });
