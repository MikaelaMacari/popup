const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");
button.addEventListener("click", () => {
  popup.style.display = "block";
  button.style.display = "none";
});
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  button.style.display = "block";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
  button.style.display = "block";
});
