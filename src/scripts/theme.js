const newTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", newTheme);
