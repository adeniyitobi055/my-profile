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

// // Handle click for certificate images
// function toggleImage(element) {
//   const certificateContainer = element;
//   certificateContainer.classList.toggle("clicked");
// }

// // Add event for escape key press on certificate images
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     const certificateContainer = document.querySelectorAll(
//       ".certificate-container.clicked"
//     );
//     certificateContainer.forEach(function (container) {
//       container.classList.remove("clicked");
//     });
//   }
// });

// Function to close and open active tabs or links
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyyW0H29JxPiN43AmYzJpNTT9XFCgwAJcIE3t1kAYMQiXXHN5yHRbFMv_y8IHuebqcv/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.innerHTML = "Message sending...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
