document.addEventListener("DOMContentLoaded", function () {
  const hamburgerActive = document.querySelector(".hamburger-element");
  const hamburgerClose = document.querySelector(".mobile-list");
  const xIcon = document.querySelector(".xIcon");
  hamburgerClose.style.display = "none";
  hamburgerActive.addEventListener("click", function () {
    hamburgerClose.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  xIcon.addEventListener("click", function () {
    hamburgerClose.style.display = "none";
    document.body.style.overflow = "unset";
  });
});
const userProfileDesktop = document.querySelector(".user-profile-desktop");
