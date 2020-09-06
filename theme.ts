const getCachingTheme = () => localStorage.getItem("theme");
const isDarkTheme = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export let current = getCachingTheme();
if (!current) current = isDarkTheme() ? "dark" : "light";

export function init() {
  current === "dark" ? setDarkTheme() : setLightTheme();
}

export function setDarkTheme() {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
  current = "dark";
}

export function setLightTheme() {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
  current = "light";
}
