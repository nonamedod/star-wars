import Character from "./Character.js";
import { charactersList } from "./charactersList.js";
import { chosen } from "./chosen.js";

const bodyElement = document.querySelector("body");


/*
Az osztályok: 
Services - feladata az asszinkron hívások kezelése
Character - egyetlen karakter adatainak megjelenítésére szolgáló osztály. Legyen egy gomb is, amire akttitnva a kiválasztott szereplő nevét kiírjuk egy előre meghatározott tárolóba. Itt legyen a saját esemény létrehozása
Characters - feladata a Character osztály példányostása 
*/
//characterslist 0...->15
//Vulcan salute
// i -> 1
new Character(charactersList[0],0,bodyElement);
new Character(charactersList[1],1,bodyElement);

window.addEventListener("vulcan", (e) => {
  const h1 = document.getElementById(`name-${e.detail.index}`);
  console.log(h1)
  h1.classList.add("red-text");
  chosen.push(e.detail.name);
  console.log(chosen);
});