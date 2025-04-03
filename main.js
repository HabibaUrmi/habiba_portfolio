const overlay = document.querySelector(".overlay");

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector("#backToTopBtn");
  if (!backToTopBtn) {
    console.error("Back to Top button not found!");
    return;
  }

  const scrollFunction = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.classList.remove("show");
      backToTopBtn.style.display = "none";
    }
  };

  window.addEventListener("scroll", scrollFunction);
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollFunction();
});

const modal = document.getElementById("modalBox");
const btn = document.querySelector(".modalBtn");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const themeToggle = document.getElementById("theme-toggle");
const hero = document.getElementById("hero");

const applyTheme = (isDark) => {
  document.body.classList.toggle("dark", isDark);
  if (hero) {
    hero.classList.toggle("dark", isDark);
  }
  themeToggle.textContent = isDark ? "Light 🌞" : "Dark 🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

const savedTheme = localStorage.getItem("theme") === "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
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
  "https://script.google.com/macros/s/AKfycbwMXjXeS3nEDlceXIA4FTbY7J8yVuMHF2Ri0llWo7hPm1MVpe1YVm7W4k7CnUp7EPtA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
}
