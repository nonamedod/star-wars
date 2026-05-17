export default class Character {
  #obj = {};
  #index = 0;
  constructor(
    obj = {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
    },
    index,
    parentElement,
  ) {
    this.parentElement = parentElement;
    this.#index = index;
    this.#obj = obj;
    this.display();
    this.EventHandler();
  }
  display() {
    let kod = `
        <div class="container-fluid">
            <div class="card-body bg-dark text-white">
            <h1 class="card-title" id="name-${this.#index}">${this.#obj.name}</h1>
            <p class="card-text">${this.#obj.height}</p>
            <p class="card-text">${this.#obj.mass}</p>
            <p class="card-text">${this.#obj.birth_year}</p>
            <p class="card-text">${this.#obj.gender}</p>
            <button type="button" class="btn btn-light" id="vulcan-${this.#index}">🖖</button>
            </div>
        </div>`;
    //🖖: nev
    this.parentElement.insertAdjacentHTML("beforeend", kod);
  }
  EventHandler() {
    const VulcanElement = document.getElementById(`vulcan-${this.#index}`);
    const colorsElement = document.getElementById(`colors-${this.#index}`);
    VulcanElement.addEventListener("click", (event) => {
      console.log("event.target", event.target);
      console.log("this", this);
      this.vulcanEvent();
    });
  }
  vulcanEvent() {
    const event = new CustomEvent("vulcan", {
      detail: {
        index: this.#index,
        name: this.#obj.name,
      },
    });
    window.dispatchEvent(event);
  }
  colorsEvent() {
    const event = new CustomEvent("colors", {
      detail: {
        hair: this.#obj.hair_color,
        skin: this.#obj.skin_color,
        eye: this.#obj.eye_color,
      },
    });
    window.dispatchEvent(event);
  }
}
