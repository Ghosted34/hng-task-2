window.addEventListener("DOMContentLoaded", () => {
  let mobileToggle = document.querySelector(".toggle");
  let mobileMenu = document.querySelector(".menu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("slide-menu");
      mobileToggle.classList.toggle("active");
    });
  }

  let mobileLinks = document.querySelectorAll(".link");

  mobileLinks.forEach((mobileLink) =>
    mobileLink.addEventListener("click", () => {
      mobileMenu.classList.remove("slide-menu");
      mobileToggle.classList.remove("active");
    })
  );

  //   Theme Change

  let themeButton = document.querySelector(".theme-change");
  let darkTheme = "dark-theme";
  let iconTheme = "fa-sun";

  let selectedTheme = localStorage.getItem("selected-theme");
  let selectedIcon = localStorage.getItem("selected-icon");

  let getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  let getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
      iconTheme
    );
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });

  // Download CV

  let resumeArea = document.querySelector("main");
  let generatePdfButton = document.querySelector(".pdf-generate");
  let options = {
    margin: 0,
    filename: "AdoleResume.pdf",
    image: { type: "jpeg", quality: 0.99 },
    enableLinks: true,
    html2canvas: { scale: 4 },
    jsPDF: { format: "a4", orientation: "portrait" },
  };

  const addScale = () => {
    document.body.classList.add("scale-cv");
  };
  const removeScale = () => {
    document.body.classList.remove("scale-cv");
  };
  const generatePdf = () => {
    html2pdf().set(options).from(resumeArea).save();
  };

  generatePdfButton.addEventListener("click", () => {
    addScale();
    generatePdf();
    setTimeout(removeScale, 2500);
  });
});
