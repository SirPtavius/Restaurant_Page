import { insertHome } from "./home";
import { insertMenu } from "./menu";
import { insertAbout } from "./about";

export function initializePage() {
  const buttons = document.querySelectorAll("button");

  function clearContent() {
    const content = document.getElementById("content");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  function handleButtonClick(contentFunction, activeButton) {
    clearContent();
    contentFunction();
    buttons.forEach((button) => button.classList.remove("activePage"));
    activeButton.classList.add("activePage");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("home")) {
        handleButtonClick(insertHome, button);
      } else if (button.classList.contains("menu")) {
        handleButtonClick(insertMenu, button);
      } else if (button.classList.contains("about")) {
        handleButtonClick(insertAbout, button);
      }
    });
  });

  // Call insertHome to set the initial screen to Home
  clearContent();
  insertHome();
  document.querySelector(".home").classList.add("activePage");
}
