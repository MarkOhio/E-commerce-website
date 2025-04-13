
  const toggleBtn = document.getElementById("themeToggle");
  const sliderIcon = document.getElementById("sliderIcon");

  // Define themes and their corresponding unicode icons
  const themes = [
    { class: "theme-dark", icon: "\u263D" },     // Moon
    { class: "theme-light", icon: "\u2600" },    // Sun
    { class: "theme-green", icon: "\ud83c\udf4f" }, // Green Apple
    { class: "theme-red", icon: "\ud83c\udf4e" },   // Red Apple
    { class: "theme-blue", icon: "\u2764" }     // Heart
  ];

  // Get saved index or default to 0
  let currentThemeIndex = parseInt(localStorage.getItem("themeIndex")) || 0;

  // Apply theme by index
  function applyTheme(index) {
    themes.forEach(theme => document.body.classList.remove(theme.class));
    document.body.classList.add(themes[index].class);
    sliderIcon.innerHTML = themes[index].icon;
    sliderIcon.style.transform = `translateX(${index * 6}px)`;
    localStorage.setItem("themeIndex", index);
  }

  applyTheme(currentThemeIndex);

  toggleBtn.addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(currentThemeIndex);
  });