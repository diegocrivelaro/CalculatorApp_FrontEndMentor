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
      /* REMOVE */
      body.classList.remove("theme2_bg_body");
      container.classList.remove("theme2");
      body.classList.remove("theme3_bg_body");
      container.classList.remove("theme3");
      /*------*/
      container.classList.add("theme2");
      body.classList.add("theme2_bg_body");
    } else if (btnChangeTheme.value == 2) {
      /* REMOVE */
      body.classList.remove("theme1_bg_body");
      container.classList.remove("theme1");
      body.classList.remove("theme3_bg_body");
      container.classList.remove("theme3");
      /*------*/
      container.classList.add("theme1");
      body.classList.add("theme1_bg_body");
    } else if (btnChangeTheme.value == 3) {
      /* REMOVE */
      body.classList.remove("theme1_bg_body");
      container.classList.remove("theme1");
      body.classList.remove("theme2_bg_body");
      container.classList.remove("theme2");
      /*------*/
      container.classList.add("theme3");
      body.classList.add("theme3_bg_body");
    }
  });
};

DefaultTheme();
ChangeTheme();
