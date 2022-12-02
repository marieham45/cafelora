import "./style.css";

import { Drink } from "./components/Drink/index.js";

export const Menu = (props) => {
  const { drinks } = props;
  const element = document.createElement("section");

  element.classList.add("menu");

  element.innerHTML = `  <div class="container" id="menu">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div class="drinks-list">

  </div>

  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>`;

  if (drinks === undefined) {
    fetch(
      `https://apps.kodim.cz/daweb/cafelora/api/me/drinks
  `,
      {
        method: "GET",
        headers: {
          Authorization: `Email masenka@gmail.com`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        element.replaceWith(Menu({ drinks: data.results }));
      });
    return element;
  }
  element.querySelector(".drinks-list").append(
    ...drinks.map((drink) =>
      Drink({
        id: drink.id,
        name: drink.name,
        ordered: drink.ordered,
        image: drink.image,
        layers: drink.layers,
      })
    )
  );

  return element;
};
