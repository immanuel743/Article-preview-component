"Use strict";
const icon = document.querySelector(".share-icon");
const icon2 = document.querySelector(".share-icon2");
const footer = document.querySelector(".article__grid-default");
const footer2 = document.querySelector(".article__grid-active");
icon.addEventListener("click", function () {
  footer.style.display = "none";
  footer2.style.display = "flex";
});
icon2.addEventListener("click", function () {
  footer.style.display = "flex";
  footer2.style.display = "none";
});
