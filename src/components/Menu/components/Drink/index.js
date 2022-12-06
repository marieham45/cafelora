import "./style.css";

import { Layer } from "../Layer/index.js";

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  const element = document.createElement("div");

  element.classList.add("drink");

  let buttonText = "Objednat";
  let buttonClass = "";
  if (ordered) {
    buttonText = "Zrušit";
    buttonClass = "order-btn--ordered";
  }

  element.innerHTML = `    
  <div class="drink__product">
    <div class="drink__cup">
      <img src=${image} />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
              </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn ${buttonClass}">${buttonText}</button>
  </div>
`;

  element
    .querySelector(".drink__info")
    .append(
      ...layers.map((layer) =>
        Layer({ color: layer.color, label: layer.label })
      )
    );

  element.querySelector(".order-btn").addEventListener("click", () => {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Email masenka@gmail.com`,
      },
      body: JSON.stringify({ ordered: true }),
    })
      .then((response) => response.json())
      .then((data) => element.replaceWith(Drink(data.results)));
  });

  return element;
};
