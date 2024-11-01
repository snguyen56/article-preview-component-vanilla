const button = document.querySelector("button");

button.onclick = function () {
  document.querySelector(".footer").classList.toggle("active");
  document.querySelector("section").classList.toggle("active");
};
