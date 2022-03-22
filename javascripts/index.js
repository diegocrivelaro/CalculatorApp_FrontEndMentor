/* GLOBAL VARIABLES */
const btnChangeTheme = document.querySelector("#theme_range");
const body = document.querySelector("body");
const container = document.querySelector(".container");

const DefaultTheme = () => {
  body.classList.add("theme1_bg_body");
  container.classList.add("theme1");
};

const ChangeTheme = () => {
  btnChangeTheme.addEventListener("change", () => {
    if (btnChangeTheme.value == 1) {
      body.classList.remove("theme1_bg_body");
      container.classList.remove("theme1");
      container.classList.toggle("theme2");
      body.classList.toggle("theme2_bg_body");
    } else if (btnChangeTheme.value == 2) {
      body.classList.remove("theme2_bg_body");
      container.classList.remove("theme2");
      container.classList.add("theme1");
      body.classList.add("theme1_bg_body");
    }
  });
};

DefaultTheme();
ChangeTheme();
