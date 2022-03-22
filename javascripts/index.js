const ChangeTheme = () => {
  const btnChangeTheme = document.querySelector("#theme_range");

  btnChangeTheme.addEventListener("change", () => {
    const body = document.querySelector("body");
    const containerBody = document.querySelector(".container");

    if (btnChangeTheme.value === "1") {
      body.classList.toggle("theme1_bg_body");
      containerBody.classList.toggle("theme1");
    }
  });
};

ChangeTheme();
