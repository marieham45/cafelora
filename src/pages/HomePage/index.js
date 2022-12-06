import { Banner } from "./components/Banner/index.js";
import { Contact } from "./components/Contact/index.js";
import { Gallery } from "./components/Gallery/index.js";
import { Menu } from "./components/Menu/index.js";
import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";

export const HomePage = () => {
  const pageElement = document.createElement("div");
  pageElement.classList.add("page");

  const main = document.createElement("main");
  main.append(Banner(), Menu({}), Gallery(), Contact());

  pageElement.append(Header({ showMenu: true }), main, Footer());

  document.querySelector("#app").append(pageElement);
};
