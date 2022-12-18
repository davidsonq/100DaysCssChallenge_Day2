const section = document.querySelector(".main__section");

const div = document.querySelectorAll(".main__hambuguer");

section.addEventListener("click", (event) => {
  section.classList.toggle("animation--open");

  div.forEach((element) => {
    element.classList.remove("animation--none");
  });
});
