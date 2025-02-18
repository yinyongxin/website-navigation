import { createSignal, onMount } from "solid-js";
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme;
  return "light";
};
const toggleTheme = (newTheme: string) => {
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};
export const useTheme = () => {
  const [theme, setTheme] = createSignal("light");
  onMount(() => {
    setTheme(getTheme());
  });

  return {
    theme: theme(),
    toggleTheme,
  };
};
