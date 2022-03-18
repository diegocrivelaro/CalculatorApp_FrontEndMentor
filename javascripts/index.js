const ChangeTheme = () => {
  const btnChangeTheme = document.querySelector("#theme_range");

  btnChangeTheme.addEventListener("change", () => {
    const body = document.querySelector("body");
    const title = document.querySelector(".title");
    const rangeDescription = document.querySelector(".range_description");
    const changeThemeLabel = document.querySelector(".change_theme_label");
    const themeRange = document.querySelector("#theme_range");
    const display = document.querySelector(".display");
    const result = document.querySelector(".result");

    if (btnChangeTheme.value === "1") {
      body.classList.add("theme1_bg_body");
      title.classList.add("theme1_text_white");
      rangeDescription.classList.add("theme1_text_white");
      changeThemeLabel.classList.add("theme1_text_white");
      themeRange.classList.add(
        "theme1_style_range_srt",
        "theme1_style_range_st"
      );
      display.classList.add("theme1_display_screen");
      result.classList.add("theme1_result");
    }
  });
};

ChangeTheme();
