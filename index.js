import Character from "./Character.js";
import Characters from "./Characters.js";
import Services from "./Services.js";
import { chosen } from "./chosen.js";

const bodyElement = document.querySelector("body");
const data = await Services.getCharacters();
new Characters(data,bodyElement);
bodyElement.insertAdjacentHTML("afterbegin", "<div class='chosen'></div>");

window.addEventListener("vulcan", (e) => {
  const h1 = document.getElementById(`name-${e.detail.index}`);
  h1.classList.toggle("red-text");
  chosen.push(e.detail.name);
  const chosenDOM = document.getElementsByClassName("chosen");
  chosenDOM[0].insertAdjacentHTML("afterbegin", `${e.detail.name}, `);
});