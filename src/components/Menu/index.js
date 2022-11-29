import "./style.css";

import { Layer } from "./components/Layer/index.js";

export const Menu = () => {
  const element = document.createElement("section");

  element.classList.add("menu");

  element.innerHTML = `  <div class="container" id="menu">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div class="drinks-list">
    <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/espresso.png" />
        </div>
        <div class="drink__info">
          <h3>Espresso</h3>
                  </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">Objednat</button>
      </div>
    </div>




  </div>

  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>`;

  element
    .querySelector(".drink__info")
    .append(Layer({ color: "#613916", label: "espresso" }));

  return element;
};
