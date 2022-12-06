import "./style.css";

import { Banner } from "./pages/HomePage/components/Banner/index.js";
import { Contact } from "./pages/HomePage/components/Contact/index.js";
import { Footer } from "./components/Footer/index.js";
import { Gallery } from "./pages/HomePage/components/Gallery/index.js";
import { Header } from "./components/Header/index.js";
import { Menu } from "./pages/HomePage/components/Menu/index.js";

console.log("funguju!");

const pageElement = document.createElement("div");
pageElement.classList.add("page");

const main = document.createElement("main");
main.append(Banner(), Menu({}), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector("#app").append(pageElement);

const { pathname } = window.location;

if (pathname === "/") {
  document.querySelector("#app").append(HomePage());
}
