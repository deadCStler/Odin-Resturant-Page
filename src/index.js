import "./style.css";
import { header } from "./header.js";
import { home_body } from "./home.js";
import { footer } from "./footer.js";
import { menu } from "./menu.js";
import { gallery } from "./gallery.js";
import { aboutUs } from "./about.js";

const code = (function () {
  const content = document.getElementById("content");
  content.appendChild(header());

  function changeDisplay(display) {
    content.innerHTML = "";
    content.appendChild(header());
    content.appendChild(display);
    content.append(footer());
    eventListener();
    return;
  }

  function highlight(className) {
    const div = document.getElementsByClassName(className);
    div[0].style.color = "#f4c377";
    div[0].style.paddingBottom = "3px";
    div[0].style.borderBottom = "2px solid #f4c377";
  }

  function eventListener() {
    const homeOpt = document.querySelector(".home");
    const menuOpt = document.querySelector(".menu");
    const galleryOpt = document.querySelector(".gallery");
    const aboutOpt = document.querySelector(".about_us");

    homeOpt.addEventListener("click", () => {
      changeDisplay(home_body());
      highlight("home");
    });

    menuOpt.addEventListener("click", () => {
      changeDisplay(menu());
      highlight("menu");
    });

    galleryOpt.addEventListener("click", () => {
      changeDisplay(gallery());
      highlight("gallery");
    });

    aboutOpt.addEventListener("click", () => {
      changeDisplay(aboutUs());
      highlight("about_us");
    });
  }

  content.appendChild(home_body());
  eventListener();
  highlight("home");
  content.append(footer());
})();
