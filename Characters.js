import Character from "./Character.js";

export default class Characters {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }
  megjelenit() {
    this.szuloElem.innerHTML = "";
    this.#lista.forEach((elem, index) => {
      new Character(this.#lista[index], index, this.szuloElem);
    });
  }
}
