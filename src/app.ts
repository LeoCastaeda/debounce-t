import { debounce } from './debounce';

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input") as HTMLInputElement;
  const defaultText = document.getElementById("default") as HTMLElement;
  const debounceText = document.getElementById("debounce") as HTMLElement;

  const updateDebounceText = debounce(() => {
    incrementCount(debounceText);
  }, 1000);

  document.addEventListener("mousemove", () => {
    incrementCount(defaultText);
    updateDebounceText();
  });

  function incrementCount(element: HTMLElement) {
    element.textContent = (parseInt(element.textContent || '0') + 1).toString();
  }
});