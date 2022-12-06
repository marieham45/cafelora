export const Header = ({ showMenu }) => {
  showMenu = true;

  const element = document.createElement("header");

  element.innerHTML = `  <div id="home" class="header__content container">
  <div class="site-logo"></div>

  <div class="navigation">
    <button class="nav-btn"></button>
    <nav class="rollout-nav nav-closed">
      <a href="/">domů</a>
      <a href="#menu">menu</a>
      <a href="#gallery">galerie</a>
      <a href="#contact">kontakt</a>
    </nav>
  </div>
</div>`;

  if (!showMenu) {
    element.innerHTML = `<div class="header__content container">
  <div class="site-logo"></div>

  <nav class="inline-nav">
    <a href="/">Hlavní stránka</a>
  </nav>

</div>`;
  }

  element.querySelector(".nav-btn").addEventListener("click", () => {
    element.querySelector(".rollout-nav").classList.toggle("nav-closed");
  });

  element.querySelector(".rollout-nav").addEventListener("click", () => {
    element.querySelector("nav").classList.toggle("nav-closed");
  });

  return element;
};
