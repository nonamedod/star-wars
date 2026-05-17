import Character from "./Character.js";
import Characters from "./Characters.js";
import Services from "./Services.js";
import { chosen } from "./chosen.js";

const bodyElement = document.body;

bodyElement.insertAdjacentHTML("afterbegin", `<div class="chosen"></div>`);
bodyElement.insertAdjacentHTML("afterbegin", `<div class="filters"></div>`);
bodyElement.insertAdjacentHTML("beforeend", `<div class="app"></div>`);
const app = document.querySelector(".app");
document.querySelector(".filters").innerHTML = `
  <button data-gender="all">Összes</button>
  <button data-gender="male">Férfi</button>
  <button data-gender="female">Nő</button>
  <button data-gender="n/a">N/A</button>
`;
const allData = await Services.getCharacters();
function render(data) {
  app.innerHTML = "";
  new Characters(data, app);
}

render(allData);

document.querySelectorAll("button[data-gender]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const gender = e.target.dataset.gender;

    const filtered =
      gender === "all"
        ? allData
        : allData.filter(c => c.gender === gender);

    render(filtered);
  });
});
window.addEventListener("vulcan", (e) => {
  const h1 = document.getElementById(`name-${e.detail.index}`);
  h1.classList.toggle("red-text");
  chosen.push(e.detail.name);
  document.querySelector(".chosen")
    .insertAdjacentHTML("afterbegin", `${e.detail.name}, `);
});